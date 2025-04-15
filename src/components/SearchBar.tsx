import { Command, CommandInput, CommandList } from "@/components/ui/command";

const SearchBar = () => {
  return (
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList />
    </Command>
  );
};

export default SearchBar;
