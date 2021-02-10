let mongoose = require("mongoose");
let db = require("../models");

let bookSeed = [
    {
        title: "Dune",
        authors: [
            "Frank Herbert"
        ],
        description: "Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.",
        image: "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://www.googleapis.com/books/v1/volumes/B1hSG45JCX4C",
    },
    {
        title: "Hyperion",
        authors: [
            "Dan Simmons"
        ],
        description: "A stunning tour de force filled with transcendent awe and wonder, Hyperion is a masterwork of science fiction that resonates with excitement and invention, the first volume in a remarkable epic by the multiple-award-winning author of The Hollow Man. On the world called Hyperion, beyond the reach of galactic law, waits a creature called the Shrike. There are those who worship it. There are those who fear it. And there are those who have vowed to destroy it. In the Valley of the Time Tombs, where huge, brooding structures move backward through time, the Shrike waits for them all. On the eve of Armageddon, with the entire galaxy at war, seven pilgrims set forth on a final voyage to Hyperion seeking the answers to the unsolved riddles of their lives. Each carries a desperate hope—and a terrible secret. And one may hold the fate of humanity in his hands. Praise for Dan Simmons and Hyperion “Dan Simmons has brilliantly conceptualized a future 700 years distant. In sheer scope and complexity it matches, and perhaps even surpasses, those of Isaac Asimov and James Blish.”—The Washington Post Book World “An unfailingly inventive narrative . . . generously conceived and stylistically sure-handed.”—The New York Times Book Review “Simmons’s own genius transforms space opera into a new kind of poetry.”—The Denver Post “An essential part of any science fiction collection.”—Booklist",
        image: "http://books.google.com/books/content?id=u4R_FstZDEgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=u4R_FstZDEgC&printsec=frontcover&dq=hyperion&hl=&cd=2&source=gbs_api",
    },
    {
        title: "The Fall of Hyperion",
        authors: [
            "Dan Simmons"
        ],
        description: "“State of the art science fiction . . . a landmark novel.”—Isaac Asimov's Science Fiction Magazine Now, in the stunning continuation of the epic adventure begun in Hyperion, Simmons returns us to a far future resplendent with drama and invention. On the world of Hyperion, the mysterious Time Tombs are opening. And the secrets they contain mean that nothing—nothing anywhere in the universe—will ever be the same. Praise for The Fall of Hyperion “One of the finest SF novels published in the past few years.”—Science Fiction Eye “A magnificently original blend of themes and styles.”—The Denver Post",
        image: "http://books.google.com/books/content?id=DaN3-r0EXOcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=DaN3-r0EXOcC&printsec=frontcover&dq=hyperion&hl=&cd=3&source=gbs_api",
    },
    {
        title: "A Clockwork Orange",
        authors: [
            "Anthony Burgess",
            "Will Self"
        ],
        description: "Penguin Decades bring you the novels that helped shape modern Britain. When they were published, some were bestsellers, some were considered scandalous, and others were simply misunderstood. All represent their time and helped define their generation, while today each is considered a landmark work of storytelling. Anthony Burgess's A Clockwork Orange was published in 1962 and has been controversial ever since. It tells the story of fifteen-year-old Alex - whose chief preoccupations are Beethoven's Ninth and ultra-violence - as he and his droogs rampage though a dystopian future seeking thrills, until they come under the control of the state's sinister apparatus.",
        image: "http://books.google.com/books/content?id=HgBEQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=HgBEQgAACAAJ&dq=a+clockwork+orange&hl=&cd=1&source=gbs_api",
    },
    {
        title: "Seveneves",
        authors: [
            "Neal Stephenson"
        ],
        description: "From the #1 New York Times bestselling author of Anathem, Reamde, and Cryptonomicon comes an exciting and thought-provoking science fiction epic—a grand story of annihilation and survival spanning five thousand years. What would happen if the world were ending? A catastrophic event renders the earth a ticking time bomb. In a feverish race against the inevitable, nations around the globe band together to devise an ambitious plan to ensure the survival of humanity far beyond our atmosphere, in outer space. But the complexities and unpredictability of human nature coupled with unforeseen challenges and dangers threaten the intrepid pioneers, until only a handful of survivors remain . . . Five thousand years later, their progeny—seven distinct races now three billion strong—embark on yet another audacious journey into the unknown . . . to an alien world utterly transformed by cataclysm and time: Earth. A writer of dazzling genius and imaginative vision, Neal Stephenson combines science, philosophy, technology, psychology, and literature in a magnificent work of speculative fiction that offers a portrait of a future that is both extraordinary and eerily recognizable. As he did in Anathem, Cryptonomicon, the Baroque Cycle, and Reamde, Stephenson explores some of our biggest ideas and perplexing challenges in a breathtaking saga that is daring, engrossing, and altogether brilliant.",
        image: "http://books.google.com/books/content?id=0VWdBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=0VWdBAAAQBAJ&printsec=frontcover&dq=seveneves&hl=&cd=1&source=gbs_api",
    },
    {
        title: "The State of the Art",
        authors: [
            "Iain M.Banks"
        ],
        description: "The first ever collection of Iain M. Banks's short fiction, this volume includes the acclaimed novella, The State of the Art. This is a striking addition to the growing body of Culture lore, and adds definition and scale to the previous works by using the Earth of 1977 as contrast. The other stories in the collection range from science fiction to horror, dark-coated fantasy to morality tale. All bear the indefinable stamp of Iain Banks's staggering talent. Praise for the Culture series: 'Epic in scope, ambitious in its ideas and absorbing in its execution' Independent on Sunday 'Banks has created one of the most enduring and endearing visions of the future' Guardian 'Jam-packed with extraordinary invention' Scotsman 'Compulsive reading' Sunday Telegraph The Culture series: Consider Phlebas The Player of Games Use of Weapons The State of the Art Excession Inversions Look to Windward Matter Surface Detail The Hydrogen Sonata Other books by Iain M. Banks: Against a Dark Background Feersum Endjinn The Algebraist",
        image: "http://books.google.com/books/content?id=CD8212z2MpcC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=CD8212z2MpcC&dq=state+of+the+art&hl=&cd=2&source=gbs_api",
    },
    {
        title: "Blood Meridian",
        authors: [
            "Cormac McCarthy"
        ],
        description: "\"The fulfilled renown of Moby-Dick and of As I Lay Dying is augmented by Blood Meridian, since Cormac McCarthy is the worthy disciple both of Melville and Faulkner,\" writes esteemed literary scholar Harold Bloom in his Introduction to the Modern Library edition. \"I venture that no other living American novelist, not even Pynchon, has given us a book as strong and memorable.\" Cormac McCarthy's masterwork, Blood Meridian, chronicles the brutal world of the Texas-Mexico borderlands in the mid-nineteenth century. Its wounded hero, the teenage Kid, must confront the extraordinary violence of the Glanton gang, a murderous cadre on an official mission to scalp Indians and sell those scalps. Loosely based on fact, the novel represents a genius vision of the historical West, one so fiercely realized that since its initial publication in 1985 the canon of American literature has welcomed Blood Meridian to its shelf. \"A classic American novel of regeneration through violence,\" declares Michael Herr. \"McCarthy can only be compared to our greatest writers.\" From the Hardcover edition.",
        image: "http://books.google.com/books/content?id=s-QzccStux4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=s-QzccStux4C&printsec=frontcover&dq=blood+meridian&hl=&cd=1&source=gbs_api",
    },
]

const seed = async () => {
    try {
        await db.Book.deleteMany({});
        const data = await db.Book.collection.insertMany(bookSeed);
        console.log(`${data.result.n} records inserted`);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seed();