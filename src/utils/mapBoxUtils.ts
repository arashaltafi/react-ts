export function mapScreenShot(
    lat: number,
    lng: number,
    width: number = 800,
    height: number = 800,
    markerUrl: string = "https://static.delta.ir/app/locationIcon.png",
    zoom: number = 16
  ): string {
    const encodeMarkerUrl = encodeURIComponent(markerUrl);
    const style = /* if (isDarkTheme()) "dark-v10" else */ "streets-v11";
    const mapboxUrl = `https://api.mapbox.com/styles/v1/mapbox/${style}/static/`;
  
    return `${mapboxUrl}url-${encodeMarkerUrl}(${lng},${lat})/${lng},${lat},${zoom},0/${width}x${height}?access_token=pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2wyMWUzeGZiMTU4bjNjbWt5Zjk3NHZ6cyJ9.oPpYJC4Xxc315h6S8Tl8Ig`;
  }