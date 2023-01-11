import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3000'
});

const createRoadmap = async (roadmapInformation: any) => {
    const response = await request.post('/api/roadmap', roadmapInformation);
    return response.data;
};

const createNode = async (nodeInformation: any) => {
    const response = await request.post('/api/node', nodeInformation);
    return response.data;
};

export { createRoadmap, createNode };
