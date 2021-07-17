db.createUser(
    {
      user: "vue-app",
      pwd: "dsc-escom-ipn", 
      roles: [
         { role: "readWrite", db: "mydb" },
         { role: "read", db: "admin" },
      ],
      passwordDigestor:"server",
      mechanisms: [
          "SCRAM-SHA-1",
          "SCRAM-SHA-256"
      ]
    }
  );