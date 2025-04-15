import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { MapPin } from "lucide-react";



// Define props interface for SelectLocation component
interface SelectLocationProps {
  selectedLocation: string; // The currently selected location to display
  onSelectLocation: (location: string) => void; // Callback function to handle the location selection
}

// List of available locations
const locations = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
  "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth",
  "Columbus", "Charlotte", "Indianapolis", "San Francisco", "Seattle", "Denver", "Washington",
];

const SelectLocation: React.FC<SelectLocationProps> = ({ selectedLocation, onSelectLocation }) => {
   // State to manage whether the popover is open or closed
  const [isOpen, setIsOpen] = useState(false);

    // Function that is called when a location is selected
  const handleLocationSelect = (location: string) => {
    onSelectLocation(location);// Update the selected location using the passed-in callback
    setIsOpen(false); // Close the popover after selection
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        {/* Button content */}
        <Button
          variant="outline"
          className="w-[160px] h-[40px] text-left flex items-center gap-2 py-2 px-3 border border-gray-300 rounded-md shadow-sm overflow-hidden"
        >
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span
            className={`text-sm truncate ${
              selectedLocation ? "font-semibold text-black" : "text-muted-foreground"
            }`}
          >
            {selectedLocation || "Select location"}
          </span>
        </Button>

      </PopoverTrigger>

      {/* Popover content that shows the list of locations */}
      <PopoverContent className="w-[220px] p-0 border border-gray-300 rounded-md shadow-md">
        <Command className="max-h-60 overflow-y-auto">
          <CommandInput placeholder="Search location..." />
          <CommandList>
            {locations.map((loc, idx) => (
              <CommandItem key={idx} onSelect={() => handleLocationSelect(loc)}>
                {loc}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent> 
    </Popover>
  );
};

export default SelectLocation;
