document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Your Note Messages Data ---
    const noteMessages = [
        { title: "Una", message: "Unang Buwan na nag-uusap tayo naramdam ko na agad yung pag-mamahal sayo salamat sa pag pasok sa buhay ko" },
        { title: "Pangalawa", message: "Pangalawang Buwan Dito kini-kilala pa natin yung isa't isa sa dalawang buwan natin ang dami na agad nangyari" },
        { title: "Pangatlo", message: "Ikatlong Buwan Nakikita ko na sobrang saya ko pag nandyan ko hindi ko na kaya pag wala ka sa tabi ko" },
        { title: "Pang-apat", message: "Ika-apat na Buwan dito na nag kakaroon ng tayo ng mga pag tatalo una kong marinig yung iyak mo" },
        { title: "Pang-lima", message: "Ika-lima na Buwan Unti unti ko pang nakikilala ang iyong pamilya ipinapakilala mo ako sa mga kamag-anak at kaibigan mo nag sisimula ng mag karoon ng koneksyon sa mga taong mahahalaga sayo" },
        { title: "Pang-anim", message: "Ika-anim na Buwan walang internet nun pero nagawan natin ng paraan. Nakapag bigay akong imbitasyon para ikaw ay maharanahan sampu kanta na paborito nating dalawa" },
        { title: "Pang-pito", message: "Ika-pito na Buwan tuloy tuloy na pag-iibigan yung mga panahon na to ikaw ay nasa trabaho ako ay nasa summer class" },
        { title: "Pang-walo", message: "Ika-walo na Buwan tuloy tuloy padin tayo may mga pag aaway pag tatampuhan maraming hindi pag-kakaintinihan nagagawan parin ng paraan maging maayos ang isa't isa" },
        { title: "Pang-siyam", message: "ika-siyam unang beses na magdiriwang ako ng kaarawan ng kasama ka salamat sa pag bati mahal kita" },
        { title: "Pang-sampu", message: "Ika-sampu na Buwan hindi pag-kakaintindihan nag-karoon ng saglit na hiwalayan pero sa huli aming naintindihan ang isa't isa mahal kita" },
        { title: "Labing-isa", message: "Labin-isa na Buwan unang pasko na kasama ka unang bati ng Merry Christmas! sa isa't isa" },
        { title: "Isang Taon", message: "Isang Taon bilis ng panahon naka isang taon na agad tayo madami nang-yari maraming naging ganap pero eto nandito padin tayo para sa isa't isa" },
        { title: "Labin-Tatlo", message: "Kahit na nasa Ospital ako hindi mo padin ako pinabayaan thank you honey mahal kita palagi thank you sa gift po" },
        { title: "Labing-Apat", message: "Pinag-Handa kita ng mga paborito mong pag kain hindi ko nakalimutan ang napaka-halagang araw na ito para saatin" },
        { title: "Labinlima", message: "Pinag bake kita ng Vanilla Cake for the First Time, Eto Buwan na to alam ko hindi din talaga naging madali para saatin hon mas magiging mabuti pa akong partner sa susunod mahal kita palagi " },
        { title: "Last Note", message: "Labing-Anim Hon Ongoing padin pag mamahalan mga busy man sa mga ginagawa naten palagi mong tandaan namahal na mahal kita palagi i love you" }
    ];

    // --- 2. Get the HTML elements ---
    const modal = document.getElementById('note-modal');
    const closeBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const noteButtons = document.querySelectorAll('.note-item');

    // --- 3. Add click events to all the note buttons ---
    noteButtons.forEach((button, index) => {
        
        // Optional: Update the text on the button itself to match the title in our data
        if(noteMessages[index]) {
            button.textContent = noteMessages[index].title;
        }

        button.addEventListener('click', () => {
            // Get the specific data for the button that was clicked
            const noteData = noteMessages[index] || { title: "Extra Note", message: "I ran out of messages, but I still love you!" };
            
            // Put the text into the pop-up
            modalTitle.textContent = noteData.title;
            modalBody.innerHTML = `<p>${noteData.message}</p>`;
            
            // Show the pop-up
            modal.classList.add('show');
        });
    });

    // --- 4. Logic to Close the Pop-up ---
    
    // When the 'X' is clicked
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // When clicking anywhere on the dark background outside the box
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});