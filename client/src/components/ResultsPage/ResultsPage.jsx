import React from 'react'

class ResultsPage extends React {
    state = {
        animals: []
    }

    componentDidMount() {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJJcmxncDFIOWk3VFZ3d2c3NXpvTFhkZTFxd3FVcXRtNUgwSGt3c2ZpRHVGcGJWVlNuRyIsImp0aSI6ImM0YmQ4NzY2MzRlY2YxMTQ5NTdkMDQ5MWIyZjQwZWY4Yjg5OTZkODdlNGUzNThmOWQwYmI4Yjg2NjRjM2U1N2NiMDZlNTFkOWFmOWU0MzBhIiwiaWF0IjoxNjM4MTM2NzI5LCJuYmYiOjE2MzgxMzY3MjksImV4cCI6MTYzODE0MDMyOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.T9ovZgfbWl5TgoYfTrEytUUfSmWt5G8hf7lk3FzVG2MsyJQr8swZBLCT4pTE80wjrcv7Mj8W9WHeCmTwgFshedeF6perdkNovzKCAZGD4NFFFY-Jclum2JPYAPNjHaBgJlXgEakt3tkPR8HkpOzuHUKrZ5XdXXTfNOgZha3cknpO1gRqXXz15jYrTwEz38Wv69dQ2mIHQ-Y7oeIJ-9Ogd-QpXuqNzmn5aGEzmv62_gnrHXOnbXuIb_SEywAfeVrmlW2lOPXoHWRhuH2bYqyBdf-z6fBa4rcPQ2hTxt-mRH2DsYmAhxHtKCywi9dp5mk89ezWld"
        axios.get(`https://api.petfinder.com/v2/animals`, {
           
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ResultsPage
