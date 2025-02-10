
export const users = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "admin123",
      "roles": [
        {
          "id": 1,
          "name": "admin",
          "permissions": [
            { "id": 1, "name": "create_user" },
            { "id": 2, "name": "delete_user" }
          ]
        }
      ]
    },
    {
      "id": 2,
      "email": "user@example.com",
      "password": "user123",
      "roles": [
        {
          "id": 2,
          "name": "user",
          "permissions": [
            { "id": 3, "name": "read_user" }
          ]
        }
      ]
    }
  ]