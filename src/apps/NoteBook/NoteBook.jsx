export function NoteBook() {

    return(

        <div class="h-full bg-gray-200 bg-[length:100%_1.5em] [background-image:repeating-linear-gradient(to_bottom,transparent_0_calc(1.5em-1px),black_calc(1.5em-1px)_1.5em)] ">
            <div class="absolute left-11 top-9.5 bottom-0 w-[1px] bg-red-500"></div>
            <div class="absolute left-12 top-9.5 bottom-0 w-[1px] bg-red-500"></div>
            <textarea class="w-full h-full bg-transparent outline-none resize-none text-gray-800 font-mono leading-[1.5em] pl-13 pt-1" placeholder="🖋️ Write Something......"></textarea>
        </div>
    )
}