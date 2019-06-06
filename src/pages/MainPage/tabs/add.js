// import React from 'react';

// import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/react';

// const AddPlaceTab = () => {
//   return (
//     <>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Add Place</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <h1>Add Place</h1>
//       </IonContent>
//     </>
//   );
// };

// export default AddPlaceTab;





import React, { Component, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      // <>
      //   <IonHeader>
      //     <IonToolbar>
      //       <IonTitle><IonIcon name="add-circle" /> Dodaj miejsce</IonTitle>
      //     </IonToolbar>
      //   </IonHeader>
      //   <IonContent fullscreen>
      //     <h1>Dodaj miejsce</h1>
      //     <Map
      //       google={this.props.google}
      //       zoom={14}
      //       style={mapStyles}
      //       initialCenter={{
      //       lat: -1.2884,
      //       lng: 36.8233
      //       }}
      //     />
      //   </IonContent>
      // </>
      <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: -1.2884,
          lng: 36.8233
          }}
        />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAd9yyQB-tPzlnJcZkFGajADWEPb6_HGQw'
})(MapContainer);