module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'API de Transferências',
        version: '1.0.0',
        description: 'API para login, registro, consulta de usuários e transferências.'
    },
    paths: {
        '/api/register': {
            post: {
                summary: 'Registrar usuário',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    username: { type: 'string' },
                                    password: { type: 'string' },
                                    favorecido: { type: 'boolean' }
                                },
                                required: ['username', 'password']
                            }
                        }
                    }
                },
                responses: {
                    201: { description: 'Usuário registrado' },
                    400: { description: 'Erro de validação' }
                }
            }
        },
        '/api/login': {
            post: {
                summary: 'Login de usuário',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    username: { type: 'string' },
                                    password: { type: 'string' }
                                },
                                required: ['username', 'password']
                            }
                        }
                    }
                },
                responses: {
                    200: { description: 'Login realizado' },
                    400: { description: 'Credenciais inválidas' }
                }
            }
        },
        '/api/users': {
            get: {
                summary: 'Listar usuários',
                responses: {
                    200: { description: 'Lista de usuários' }
                }
            }
        },
        '/api/transfer': {
            post: {
                summary: 'Realizar transferência',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    senderId: { type: 'integer' },
                                    recipientId: { type: 'integer' },
                                    amount: { type: 'number' }
                                },
                                required: ['senderId', 'recipientId', 'amount']
                            }
                        }
                    }
                },
                responses: {
                    200: { description: 'Transferência realizada' },
                    400: { description: 'Erro na transferência' }
                }
            }
        },
        '/api/transfer/{userId}': {
            get: {
                summary: 'Histórico de transferências do usuário',
                parameters: [
                    {
                        name: 'userId',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                responses: {
                    200: { description: 'Histórico de transferências' }
                }
            }
        }
    }
};
