import path  from 'path';

const __dirname = path.resolve();

export const Home = (req, res) => {
    res.sendFile('./express-app/views/index.html', { root: __dirname });
}

export const About = (req, res) => {
    res.sendFile('./express-app/views/about.html', { root: __dirname });
}

export const Contact = (req, res) => {
    res.sendFile('./express-app/views/contact.html', { root: __dirname });
}