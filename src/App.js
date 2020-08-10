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
    }}

  }
  componentDidMount() {


      fetch("https://wl-api.mf.gov.pl/api/search/nip/5511103933?date=2020-05-05")
      .then(data =>data.json())
      .then(json => this.setState({nips:json}));



  }



  render()
  {
    return(<h2>{this.state.nips.result.subject.name}</h2>)
  }
}
export default App;
