// src/config/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Template Backend API',
            version: '1.0.0',
            description: 'API documentation for Template Backend',
        },
        servers: [
            { url: 'http://localhost:3000' },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            },

            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1
                        },
                        email: {
                            type: 'string',
                            example: 'user@example.com'
                        },
                        roles: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/Role'
                            }
                        }
                    }
                },
                Role: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1
                        },
                        name: {
                            type: 'string',
                            example: 'Admin'
                        },
                        permissions: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/Permission'
                            }
                        }
                    }
                },
                Permission: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1
                        },
                        name: {
                            type: 'string',
                            example: 'READ_USER'
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.ts','./src/routes/**/*.ts'],
};


const specs = swaggerJsdoc(options);

export const swaggerSetup = (app: express.Application) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};