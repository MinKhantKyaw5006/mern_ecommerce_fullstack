import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const NewsLetter = () => {
  return (
    <section className="w-full bg-blue-800 py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Subscribe to our Newsletter</h2>
        <p className="text-white mt-2 mb-6">
          Stay updated with the latest deals, new arrivals, and exclusive offers.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-3">
          {/* Input with Email Icon */}
          <div className="relative w-full sm:w-auto flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5 pointer-events-none" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10 placeholder-white text-white bg-white/10 border border-white/30 focus-visible:ring-white"
            />
          </div>

          <Button type="submit" className="w-full sm:w-auto">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
