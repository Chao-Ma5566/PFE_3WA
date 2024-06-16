import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Threebody E-commerce API documentation",
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Development server",
      },
    ],
  },
  apis: ["./router/*.js", "./controller/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default (app) => {
  app.use('/swagger-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
