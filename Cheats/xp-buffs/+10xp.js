(async () => { /* This is to prevent "identifier i is already declared errors" */
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/getDailyRewards.js")?.answers?.[0]}`)).then(async x => {
        if (1678980419801 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            let i = document.createElement('iframe');
            document.body.append(i);
            window.alert = i.contentWindow.alert.bind(window);
            i.remove();
            if (!location.href.includes("play.blooket.com")) (alert("use it on play.blooket.com"), window.open("https://play.blooket.com/"));
            else {
                var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
                axios.post("https://play.blooket.com/api/playersessions/solo", { gameMode: "Factory" }).then(({ data: { t } }) => {
                    axios.get("https://play.blooket.com/api/users/me").then(({ data: { name } }) => {
                        axios.put("https://play.blooket.com/api/users/add-rewards", { t, name, addedXp: 10 })
                            .then(({ data: { dailyReward } }) => alert(`Added max xp, and got ${dailyReward} xp`))
                            .catch(() => alert('There was an error when adding xp.'));
                    }).catch(() => alert('There was an error user data.'));
                });
            }
        }
    });
})();