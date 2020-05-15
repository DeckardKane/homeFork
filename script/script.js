const Config = {
    name: "pct",
    scale: 1,
    Links: [
        [
            "cloud",
            [
                ["dropbox", "https://www.dropbox.com/h"],
                ["googleDrive", "https://drive.google.com/drive/"]
            ]
        ],
        [
            "tech",
            [
                ["github", "https://github.com/"],
                ["adafruitIO", "https://io.adafruit.com/DeckardKane/dashboards"],
                ["paperspace", "https://www.paperspace.com/console/machines"]
            ]
        ],
        [
            "MICA",
            [
                ["canvas", "https://mica.instructure.com/"],
                ["workday", "https://wd5.myworkday.com/mica/d/home.htmld"],
                ["gearCheckout", "https://checkout.mica.edu/patron"]
            ]
        ],
        [
            "general",
            [
                ["gmail", "https://mail.google.com/mail/u/0/"],
                ["calendar", "https://calendar.google.com/calendar/b/1/r?pli=1"],
                ["infinity", "https://app.startinfinity.com/home"],
                ["notion", "https://www.notion.so/Personal-Home-f429d5af08c846f99a28939e07295235"],
                ["link", "https://www.example.com"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>`
        ).join("")

        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
