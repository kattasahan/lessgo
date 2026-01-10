import { PNavbar } from '@/components/app/navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full lg:px-30">
        <div className="relative bg-white dark:bg-black">
          <PNavbar />
          <main className="h-[200vh] py-32 px-16 sm:items-start">
            
          </main>
        </div>
      </div>
    </div>
    // </>
  );
}
