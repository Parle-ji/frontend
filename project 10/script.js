const story = document.querySelector('.story');
const openStory = document.querySelector('.openStory');
const heading = document.querySelector('.heading');

let images = [
    {
        dp: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
        dp: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
        dp: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
        dp: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1583766395091-2eb9994ed094?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
        dp: 'https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1619595956937-f35348cec320?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },


];

let jaduyiChij = '';

images.forEach((ans, idx) => {
    // console.log(ans, idx);
    jaduyiChij += `  <div class="box">
            <img id="${idx}" src="${ans.dp}" alt="" />
          </div>`;
});

story.innerHTML = jaduyiChij;

story.addEventListener('click', (eventHuaa) => {
    // console.log(images[eventHuaa.target.id].story)
    openStory.style.display = 'block';
    openStory.style.backgroundImage = `url(${images[eventHuaa.target.id].story})`;
    heading.style.display = 'none';
    setTimeout(() => {
        openStory.style.display = 'none';
        heading.style.display = 'block'; 
    }, 2000)

});

