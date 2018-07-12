$(document).ready(function() {
    var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "freecodecamp", "RobotCaleb"];
    var names = "";
    var logos = "";
    var links = "";
    var status = "";
    var games = "";
    var desc = "";

    // Show Streamers Buttons
    $('.all').click(() => {
        $('.all').addClass('active');
        $('.on-line, .off-line').removeClass('active');
        $('.Online').show(500);
        $('.Offline').show(500);
    });

    $('.on-line').click(() => {
        $('.on-line').addClass('active');
        $('.all, .off-line').removeClass('active');
        $('.Online').show(500);
        $('.Offline').hide(500);
    });

    $('.off-line').click(() => {
        $('.off-line').addClass('active');
        $('.all, .on-line').removeClass('active');
        $('.Offline').show(500);
        $('.Online').hide(500);
    });

    getTwitch(0);

    function getTwitch(i) {

        if (i == streamers.length)
            return;
        var stream = "https://wind-bow.gomix.me/twitch-api/streams/";
        var channel = "https://wind-bow.gomix.me/twitch-api/channels/";
        channel += streamers[i];
        stream += streamers[i];
        channel += "?callback=?";
        stream += "?callback=?";

        $.getJSON(channel, function(e) {
            $.getJSON(stream, function(f) {
                getOfflineData(e);
                getOnlineData(f);
                setData(i);
                getTwitch(i + 1);
            });
        });
    }

    function getOfflineData(e) {
        names = e.name;
        logos = e.logo;
        links = e.url;
    }

    function setData(i) {
        if (names == undefined) {
            names = streamers[i];
            games = "User not found!";
            links = "#";
            logos = "#";
        }

        content = "<div class='col-3 streamer " + status + "'>";
        content += "<h5 class='username'><a href='" + links + "' target='_blank'>" + names + "</h5></a>";
        content += "<img class='logo' src='" + logos + "'></img>";
        content += "<div class='status'>" + status + "</div>";
        content += "<div class='streaming'><a href='" + links + "' target='_blank'>" + desc + "</a></div></div>";

        $("#streamers > .row").append(content);
    }

    function getOnlineData(f) {
        if (f.stream == null) {
            status = "Offline";
            games = "";
            desc = "";
        } else {
            status = "Online";
            games = f.stream.game;
            desc = ": " + f.stream.channel.status;
        }
    }
})