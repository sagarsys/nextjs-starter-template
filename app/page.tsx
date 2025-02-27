import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="h-[100vh] grid grid-flow-row grid-cols-1 gap-1 justify-items-center content-center">
            <h1 className="text-3xl font-bold">
                Hello world!
            </h1>
            <Button className="mt-4 max-w-[500px]">I am a button</Button>
        </div>
    );
}
