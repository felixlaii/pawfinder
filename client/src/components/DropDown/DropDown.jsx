import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import DropDownNav from '../DropDownNav/DropDownNav'

class DropDown extends Component {
    state = {
        animalList: null,
        breed: [],
        cats: null,
        dogs: null
    }

    componentDidMount() {
        axios.get(`http://localhost:8080`)
            .then((response) => { console.log(response)
                this.setState({ 
                    animalList: response.data.animals,
        
                })
            })
            .catch((error) => (error))

        // axios.get(`http://localhost:8080/searchspecies/:species`)
        //     .then((response) => { console.log(response)
        //         this.setState({
        //             cats: response.data.animals.type,
        //             dogs: response.data.animals.type,
        //         })
        //     })

        //     axios.get(`http://localhost:8080/searchbreed/:breed`)
        //     .then((response) => { console.log(response)
        //         this.setState({
        //             breed: response.data.animals.breeds.primary
        //         })
        //     })
    }

    render() { 
        if (!this.state.animalList) return <div><p className="loading">Loading...</p></div>

        return (
            <div>
               <DropDownNav 
               animalList={this.state.animalList}
               />
            </div>
        )
    }
}

export default DropDown
