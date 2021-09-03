import React from 'react';


class TrainerItem extends React.Component {
    render() {
        const {trainer, getTrainer, deleteTrainer} = this.props

        const handleDeleteTrainer = (e) => {
            console.log(e.target.id)
            deleteTrainer(parseInt(e.target.id))
        }
        
        
        const handleGetTrainer = (e) => {
            getTrainer(e.target.id)
        }

        return(
            <div className="container">
                <button className = "deleteButton" id={trainer.trainer_id} onClick= {handleDeleteTrainer}>Delete</button>
                <h1 className="listItem" onClick={handleGetTrainer} id={trainer.trainer_id}>{trainer.first_name} {trainer.last_name}</h1>
                <p>{`Training Experience: ${trainer.years_of_experience} years`}</p>
            </div>
        )
    }
}

export default TrainerItem