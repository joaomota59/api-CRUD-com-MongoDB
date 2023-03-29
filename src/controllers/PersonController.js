import { Person } from "../models/Person.js";

export default {

    async index(req, res) {
    const people = await Person.find();
    return res.status(200).json(people);
    },

    async indexPerson (req, res) {
        const id = req.params.id;

        Person.findById(id)
        .then(person => {
            return res.status(200).json(person);
        })
        .catch(err => {
            return res.status(404).json({ error: 'Pessoa não encontrada!' });
        });

    },

    async create(req, res) {
        const { name, salary, approved } = req.body;
        
        const personReq = {
            name,
            salary,
            approved
        }

        Person.create({ name, salary, approved })
        .then(person => {
            return res.status(201).json(personReq);
        })
        .catch(err => {
            return res.status(400).json({ error: 'Erro ao criar pessoa!' });
        });

    },


    async update(req, res) {
        const id = req.params.id;
        const { name, salary, approved } = req.body;

        const personReq = {
            name,
            salary,
            approved
        }

    
        Person.updateOne({_id: id}, personReq)
        .then(person => {
            return res.status(200).json(personReq);
        })
        .catch(err => {
            return res.status(404).json({ error: 'Pessoa não encontrada!' });
        });
    },

    async delete(req, res) {
        const id = req.params.id;

        Person.findByIdAndDelete(id)
        .then(person => {
            return res.status(200).json({ message: 'Pessoa deletada com sucesso!' });
        })
        .catch(err => {
            return res.status(404).json({ error: 'Pessoa não encontrada!' });
        });

        
    }




     

};