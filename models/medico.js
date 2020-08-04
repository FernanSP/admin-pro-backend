const { Schema, model } = require('mongoose');

const MedicoSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    usuario: {
        required: true,
        type: Shema.Types.ObjectId,
        ref: 'Usuario'
    },
    hospital: {
        required: true,
        type: Shema.Types.ObjectId,
        ref: 'Hospital'
    }
});

MedicoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toOnject();
    return object;
})

module.exports = model('Medico', MedicoSchema);