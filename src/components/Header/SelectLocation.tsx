import React, { useState, useContext } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { MapPin } from "lucide-react";
import { Mycontext } from "@/App";

interface SelectLocationProps {
  selectedLocation: string;
  onSelectLocation: (location: string) => void;
}

const SelectLocation: React.FC<SelectLocationProps> = ({ selectedLocation, onSelectLocation }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fetch country list from context
  const { countryList } = useContext(Mycontext) || {}; // Safely access the context
  const countries = countryList ? countryList.map(country => country.country) : [];

  const handleLocationSelect = (location: string) => {
    onSelectLocation(location);  // Pass selected location to parent
    setIsOpen(false); // Close popover
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[160px] h-[40px] text-left flex items-center gap-2 py-2 px-3 border border-gray-300 rounded-md shadow-sm overflow-hidden"
        >
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className={`text-sm truncate ${selectedLocation ? 'font-semibold text-black' : 'text-muted-foreground'}`}>
            {selectedLocation || "Select location"}
          </span>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[220px] p-0 border border-gray-300 rounded-md shadow-md">
        <Command className="max-h-60 overflow-y-auto">
          <CommandInput placeholder="Search location..." />
          <CommandList>
            {countries.length === 0 ? (
              <div>Loading countries...</div> // Show loading if countries array is empty
            ) : (
              countries.map((country, idx) => (
                <CommandItem key={idx} onSelect={() => handleLocationSelect(country)}>
                  {country}
                </CommandItem>
              ))
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectLocation;
