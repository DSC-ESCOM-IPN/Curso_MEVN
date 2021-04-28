db.createUser(
    {
      user: "<your-username>",
      pwd: "<your-password>", 
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
  )