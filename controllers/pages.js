import path  from 'path';

const __dirname = path.resolve();

export const Home = (req, res) => {
    res.sendFile('./Pertemuan 10/views/index.html', { root: __dirname });
}

export const About = (req, res) => {
    res.sendFile('./Pertemuan 10/views/about.html', { root: __dirname });
}

export const Contact = (req, res) => {
    res.sendFile('./Pertemuan 10/views/contact.html', { root: __dirname });
}