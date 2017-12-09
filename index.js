let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);


        var data = [{
                status: 'task',
                desc: 'something something',
                avatar: 'img/actor.jpg',
                color: 'red'
            },
            {
                status: 'task',
                desc: 'something something dashboard is awesome',
                avatar: 'img/actor.jpg',
                color: 'yellow'
            },
            {
                status: 'task',
                desc: 'something something',
                avatar: 'img/actor.jpg',
                color: 'blue'
            },
            {
                status: 'task',
                desc: 'something something, wow is amazing in dashboard',
                avatar: 'img/actor.jpg',
                color: 'green'
            },
            {
                status: 'task',
                desc: 'something something dashboard is awesome',
                avatar: 'img/actor.jpg',
                color: 'blue'
            },

            {
                status: 'task',
                desc: 'something something',
                avatar: 'img/actor.jpg',
                color: 'blue'
            },
            {
                status: 'progress',
                desc: 'something something',
                avatar: 'img/actor.jpg',
                color: 'green'
            },
            {
                status: 'progress',
                desc: 'something something, wow that is amazing',
                avatar: 'img/actor.jpg',
                color: 'yellow'
            },
            {
                status: 'progress',
                desc: 'something something',
                avatar: 'img/actor.jpg',
                color: 'green'
            },
            {
                status: 'progress',
                desc: 'something something, wow is amazing in dashboard',
                avatar: 'img/actor.jpg',
                color: 'blue'
            },

            {
                status: 'ready',
                desc: 'something something',
                avatar: 'img/actor.jpg',
                color: 'yellow'
            },
            {
                status: 'ready',
                desc: 'something something, wow is amazing in dashboard',
                avatar: 'img/actor.jpg',
                color: 'green'
            },
            {
                status: 'ready',
                desc: 'something something',
                avatar: 'img/actor.jpg',
                color: 'yellow'
            },
            {
                status: 'ready',
                desc: 'something something, wow is amazing in dashboard',
                avatar: 'img/actor.jpg',
                color: 'blue'
            },

            {
                status: 'approved',
                desc: 'something something, something something, something something, something something',
                avatar: 'img/actor.jpg',
                color: 'blue'
            },
            {
                status: 'approved',
                desc: 'something something, wow is amazing in dashboard',
                avatar: 'img/actor.jpg',
                color: 'yellow'
            },
            {
                status: 'approved',
                desc: 'something something',
                avatar: 'img/actor.jpg',
                color: 'green'
            },
            {
                status: 'approved',
                desc: 'wow is amazing in dashboard',
                avatar: 'img/actor.jpg',
                color: 'red'
            },
        ];
        var task = document.getElementById('task');
        var progress = document.getElementById('progress');
        var ready = document.getElementById('ready');
        var approved = document.getElementById('approved');

        console.log(task, progress, ready, approved);
        data.forEach(function (value) {
            var imgSection = document.createElement('div');
            imgSection.className = 'width-10';

            var img = document.createElement('div');
            img.style.backgroundImage = "url(" + value.avatar + ")";
            img.className = 'secondary-image';

            imgSection.appendChild(img);

            var desc = document.createElement('div');
            desc.className = 'width-80 padding-6-horizontal';
            desc.innerHTML = value.desc;

            var icon = document.createElement('div');
            icon.className = 'width-10';

            var iFa = document.createElement('i');
            icon.className = 'fa fa-play';

            icon.appendChild(iFa);

            var block = document.createElement('div');
            block.className = 'full-width ' + value.color + ' hovering';

            block.appendChild(imgSection);
            block.appendChild(desc);
            block.appendChild(icon);

            switch (value.status) {
                case 'task':
                    task.appendChild(block);
                    break;

                case 'progress':
                    progress.appendChild(block);
                    break;

                case 'ready':
                    ready.appendChild(block);
                    break;

                case 'approved':
                    approved.appendChild(block);
                    break;
            }
        });

    }
}, 100);