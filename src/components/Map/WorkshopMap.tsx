
import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Workshop {
  id: string;
  name: string;
  address: string;
  distance: string;
  phone: string;
  hours: string;
  rating: number;
  coordinates?: [number, number]; // longitude, latitude
}

interface WorkshopMapProps {
  workshops: Workshop[];
  onSelectWorkshop: (id: string) => void;
}

const WorkshopMap: React.FC<WorkshopMapProps> = ({ workshops, onSelectWorkshop }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<{ marker: mapboxgl.Marker; id: string; element: HTMLDivElement }[]>([]);
  const selectedWorkshopRef = useRef<string | null>(null);
  
  // Initialize the map when the component mounts
  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialize Mapbox with your token
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2VudDFob2ZmIiwiYSI6ImNtYXYwNnJmYjAydjkyaXI0eXFyZ255bW8ifQ.Fs8f2jPzYF-2KE4uBNePqQ';
    
    // Create the map instance
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/kent1hoff/cmav09ryu002p01r45qwo4pid',
      center: [2.3522, 48.8566], // Default to Paris
      zoom: 11
    });
    
    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Add markers when the map is loaded
    map.current.on('load', () => {
      addMarkers();
    });
    
    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);
  
  // Function to update marker colors based on selection
  const updateMarkerColors = (selectedId: string | null) => {
    markers.current.forEach(({ element, id }) => {
      if (id === selectedId) {
        element.style.backgroundColor = '#3b82f6'; // Blue color for selected
      } else {
        element.style.backgroundColor = 'var(--primary)'; // Default color
      }
    });
  };
  
  // Function to handle workshop selection and zoom
  const handleWorkshopSelect = (workshopId: string) => {
    const workshop = workshops.find(w => w.id === workshopId);
    if (workshop && workshop.coordinates && map.current) {
      // Zoom to the selected workshop
      map.current.flyTo({
        center: workshop.coordinates,
        zoom: 15,
        duration: 1500
      });
      
      // Update marker colors
      selectedWorkshopRef.current = workshopId;
      updateMarkerColors(workshopId);
      
      // Call the parent callback
      onSelectWorkshop(workshopId);
    }
  };
  
  // Add markers for each workshop
  const addMarkers = () => {
    if (!map.current) return;
    
    // Clear any existing markers
    markers.current.forEach(({ marker }) => marker.remove());
    markers.current = [];
    
    // Coordinates for workshops (mock data with Paris area coordinates)
    const workshopsWithCoords = workshops.map((workshop, index) => {
      // Use actual coordinates if available, otherwise generate some around Paris
      const coords = workshop.coordinates || [
        2.3522 + (Math.random() - 0.5) * 0.1, 
        48.8566 + (Math.random() - 0.5) * 0.1
      ];
      return { ...workshop, coordinates: coords };
    });
    
    // Add new markers
    workshopsWithCoords.forEach(workshop => {
      if (!workshop.coordinates) return;
      
      // Create a custom marker element
      const el = document.createElement('div');
      el.className = 'workshop-marker';
      el.style.width = '30px';
      el.style.height = '30px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = 'var(--primary)';
      el.style.display = 'flex';
      el.style.justifyContent = 'center';
      el.style.alignItems = 'center';
      el.style.color = 'white';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
      el.style.transform = 'translate(-50%, -50%)';
      el.style.transition = 'background-color 0.3s ease';
      
      // Add map pin icon
      const iconElement = document.createElement('div');
      iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
      el.appendChild(iconElement);
      
      // Create the marker
      const marker = new mapboxgl.Marker(el)
        .setLngLat(workshop.coordinates as [number, number])
        .addTo(map.current!);
        
      // Add click event to marker
      el.addEventListener('click', () => {
        handleWorkshopSelect(workshop.id);
      });
      
      markers.current.push({ marker, id: workshop.id, element: el });
    });
    
    // Adjust the map to fit all markers if there are any
    if (workshopsWithCoords.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      workshopsWithCoords.forEach(workshop => {
        if (workshop.coordinates) {
          bounds.extend(workshop.coordinates as [number, number]);
        }
      });
      map.current.fitBounds(bounds, { padding: 100 });
    }
  };
  
  // Update markers when workshops change
  useEffect(() => {
    if (map.current && map.current.loaded()) {
      addMarkers();
    }
  }, [workshops]);
  
  return (
    <div className="w-full">
      {/* Mapbox Map */}
      <div className="w-full h-56 rounded-lg mb-4 relative overflow-hidden">
        <div ref={mapContainer} className="absolute inset-0"></div>
      </div>
      
      {/* Workshop List */}
      <div className="space-y-3 mt-4">
        {workshops.map(workshop => (
          <div 
            key={workshop.id} 
            className="workshop-card cursor-pointer bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            onClick={() => handleWorkshopSelect(workshop.id)}
          >
            <h3 className="font-medium">{workshop.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{workshop.address}</p>
            <p className="text-sm text-primary mt-1">{workshop.distance} away</p>
            
            <div className="flex justify-between mt-2">
              <div className="flex items-center text-xs text-gray-600">
                <Clock size={12} className="mr-1" />
                <span>{workshop.hours}</span>
              </div>
              
              <div className="flex items-center text-xs text-gray-600">
                <Phone size={12} className="mr-1" />
                <span>{workshop.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopMap;
