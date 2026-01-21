import Image from "next/image";

const banks = [
  { name: "Maybank", logo: "/bank-logos/maybank.png" },
  { name: "CIMB", logo: "/bank-logos/cimb.png" },
  { name: "Public Bank", logo: "/bank-logos/public-bank.png" },
  { name: "RHB", logo: "/bank-logos/rhb.png" },
  { name: "Hong Leong", logo: "/bank-logos/hong-leong.png" },
  { name: "AmBank", logo: "/bank-logos/ambank.png" },
  { name: "Bank Islam", logo: "/bank-logos/bank-islam.png" },
  { name: "HSBC", logo: "/bank-logos/hsbc.png" },
  { name: "Standard Chartered", logo: "/bank-logos/standard-chartered.png" },
];

export default function BankLogos() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8">Compare rates from Malaysia&apos;s leading banks</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {banks.map((bank) => (
            <div
              key={bank.name}
              className="flex items-center justify-center w-[120px] h-[50px] bg-gray-50 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-200 p-2"
            >
              <div className="relative w-full h-full">
                <Image
                  src={bank.logo}
                  alt={`${bank.name} logo`}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
