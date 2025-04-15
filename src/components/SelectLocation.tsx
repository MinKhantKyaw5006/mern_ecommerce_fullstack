import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { MapPin } from "lucide-react";
import { locations } from "@/constants/locations"; // ✅ import locations here

interface SelectLocationProps {
  selectedLocation: string;
  onSelectLocation: (location: string) => void;
}

const SelectLocation: React.FC<SelectLocationProps> = ({ selectedLocation, onSelectLocation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLocationSelect = (location: string) => {
    onSelectLocation(location);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
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
