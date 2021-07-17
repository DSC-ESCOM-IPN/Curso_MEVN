echo "Creating the metallb namespace..."
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/master/manifests/namespace.yaml

echo "Creating the memberlist secrets..."
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)" 

echo "Applying metallb manifest..."
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/master/manifests/metallb.yaml

status=$(kubectl get pods -n metallb-system --sort-by=.metadata.creationTimestamp | tail -n 1 | awk '{print $3}')
until [ $status == "Running" ]
do
    echo "Waiting the Pod to be ready... Status: $status"
    status=$(kubectl get pods -n metallb-system --sort-by=.metadata.creationTimestamp | tail -n 1 | awk '{print $3}')
    sleep 2
done

echo "Getting kind IP addresses range..."
docker network inspect -f '{{.IPAM.Config}}' kind

echo "Applying LoadBalancer ConfigMap..."
kubectl apply -f ${PWD}/loadbalancer.yml