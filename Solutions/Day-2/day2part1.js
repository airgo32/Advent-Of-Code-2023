let sum_of_ids = 0;

const MAX_REDS = 12
const MAX_GREENS = 13
const MAX_BLUES = 14

function main() {

    let input = "Solutions/Day2/input.txt" // input goes here
    let fs = require("fs")

    fs.readFile(input, function (err, data) {
        if (err) {
            return console.log(err)
        }
        let lines = data.toString("utf-8").split('\n')
        for (let n = 0; n < lines.length; n++) {
            let valid_game = true;
            let line = lines[n]
            let parts = line.split(":")
            let game_id = parseInt(parts[0].slice(parts[0].indexOf(" ")))
            let rounds = parts[1].split(";")       

            for (let j = 0; j < rounds.length; j++) {
                let pulls = rounds[j].split(",")

                for (let i = 0; i < pulls.length; i++) {
                    let space = pulls[i].trim().indexOf(" ")
                    let count = pulls[i].trim().substring(0, space)
                    let color = pulls[i].trim().slice(space+1)
                    switch(color) {
                        case "red":
                            if (count > MAX_REDS) {
                                valid_game = false;
                            }
                        break;
                        case "green":
                            if (count > MAX_GREENS) {
                                valid_game = false;
                            }
                        break;
                        case "blue":
                            if (count > MAX_BLUES) {
                                valid_game = false;
                            }
                        break;
                    }
                }
            }
            if (valid_game) {
                sum_of_ids += game_id
            }
        }
        console.log(sum_of_ids)

    })
}

main()