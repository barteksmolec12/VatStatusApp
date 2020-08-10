import React from 'react';
import './App.css';
class App extends React.Component
{
  state={
    nips:{"result": {
      "subject": {
        "name": "ZBIGNIEW SMOLEC",
        "nip": "5511103933",
        "statusVat": "Czynny",
        "regon": "121130720",
        "pesel": null,
        "krs": null,
        "residenceAddress": "BIADASOWSKA 9, 34-120 ZAGÓRNIK",
        "workingAddress": null,
        "representatives": [
          
        ],
        "authorizedClerks": [
          
        ],
        "partners": [
          
        ],
        "registrationLegalDate": "2010-06-01",
        "registrationDenialBasis": null,
        "registrationDenialDate": null,
        "restorationBasis": null,
        "restorationDate": null,
        "removalBasis": null,
        "removalDate": null,
        "accountNumbers": [
          "81811000002001004435040001"
        ],
        "hasVirtualAccounts": false
      },
      "requestId": "l7mc0-88dh943",
      "requestDateTime": "10-08-2020 18:49:39"
    }},
    nip:"tes",
    status:""
    

  }
  getVatStatus() {
    console.log("pobrano")
 let nipFromInput=this.state.nip
 let path="https://wl-api.mf.gov.pl/api/search/nip/"
  path=path+nipFromInput+"?date=2020-05-05"
  console.log(path)

      fetch (path)
      .then(data =>data.json())
      .then(json => this.setState({status:json.result.subject.name}));



  }
handleChange = (e)=> {
  this.setState({nip:e.target.value})
    console.log(e.target.value);
  }
  



  render()
  {
   
  // this.handleChange = this.handleChange.bind(this);
   this.getVatStatus = this.getVatStatus.bind(this);
    return(
      <div>
              
              <label>
                Imię:
                <input name="firstName" onChange={this.handleChange} />
              </label>
              <button onClick={this.getVatStatus}> Wyślij </button>

                <h2>{this.state.status}</h2>
                
    </div>
    
    )
  }
}
export default App;
