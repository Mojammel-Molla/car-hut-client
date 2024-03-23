import GoogleMapReact from 'google-map-react';

const ContactMap = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  // Define defaultProps outside of the SimpleMap function
  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152,
    },
    zoom: 11,
  };

  return (
    <div className="h-[60vh]">
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default ContactMap;
