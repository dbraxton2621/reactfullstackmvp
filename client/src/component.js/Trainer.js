import React from 'react';
import TrainerItem from './TrainerItem';


class Trainer extends React.Component {
    render() {
        const{getTrainer, trainers, deleteTrainer} = this.props


        return (
            <div>
                {trainers.map((trainer) => (
                    <TrainerItem trainer={trainer} key={trainer.trainer_id} getTrainer={getTrainer} deleteTrainer={deleteTrainer}/>
                ))}
            </div>
        )
    };
}

export default Trainer