import React from 'react'
class PostForm extends React.Component {
    
        state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            yearsOfExperience: '',
            bodybuilding: false,
            crossfit: false,
            running: false,
            olympicLifting: false,
            powerLifting: false,
            strongman: false,
            calistenics: false,
            cycling: false,
            functionalFitness: false,
            dance: false,
        }
          
    render() {
        const{firstName, lastName, phoneNumber, email, yearsOfExperience, bodybuilding, crossfit, running, olympicLifting, powerLifting, strongman, calistenics, cycling, functionalFitness, dance} = this.state
        const{postTrainer} = this.props

        const handleChange = (e) => {
            const key = e.target.name //key should be the names of the elements; firstName, lastName, phoneNumber, etc.
            const value = e.target.checked || e.target.value
            this.setState({[key]: value})
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            const obj = this.state
            console.log(obj)
            postTrainer(obj)
        }
    
    
    return (
        <center>
        <form className = 'add-Form' onSubmit={handleSubmit}>
            <div className= 'form-control'>
                <label>First Name</label>
                <input type='text' placeholder='First Name'
                name = "firstName"
                value= {firstName}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control'>
                <label>Last Name</label>
                <input type='text' placeholder='Last Name'
                name= "lastName"
                value= {lastName}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control'>
                <label>Phone Number</label>
                <input type="number" placeholder='Phone Number'
                name= "phoneNumber"
                value= {phoneNumber}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control'>
                <label>Email</label>
                <input type='text' placeholder='Email'
                name= {"email"}
                value= {email}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control'>
                <label>Years of Experience</label>
                <input type='number' placeholder='Years of Experience'
                name= "yearsOfExperience"
                value= {yearsOfExperience}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Bodybuilding</label>
                <input type='checkbox'
                name = {"bodybuilding"}
                checked={bodybuilding}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Crossfit</label>
                <input type='checkbox'
                name = {"crossfit"}
                checked={crossfit}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Running</label>
                <input type='checkbox'
                name = {"running"}
                checked={running}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Olympic Lifting</label>
                <input type='checkbox'
                name= {"olympicLifting"}
                checked={olympicLifting}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Power Lifting</label>
                <input type='checkbox'
                name = {"powerLifting"}
                checked={powerLifting}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Strongman</label>
                <input type='checkbox'
                name = {"strongman"}
                checked={strongman}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Calistenics</label>
                <input type='checkbox'
                name = {"calistenics"}
                checked={calistenics}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Cycling</label>
                <input type='checkbox'
                name = {"cycling"}
                checked={cycling}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Functional Fitness</label>
                <input type='checkbox'
                name = {"functionalFitness"}
                checked={functionalFitness}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Dance</label>
                <input type='checkbox'
                name = {"dance"}
                checked={dance}
                onChange={handleChange}/>
            </div>
            <button type="submit" value='Save Trainer' className='btnPost' >Submit</button>
        </form>
        </center>
    )
    }
}




export default PostForm