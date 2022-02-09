const $emoji = document.getElementById('emoji')

const emoji = []

for (let code=128210; code<128314; code++) {
    emoji.push(`<div class="emoji" id="flex">
    <p><span style="font-size: 5rem;">&#${code}</span><br>${code}</p>
    
    </div>`)
}
$emoji.innerHTML += emoji.join('')

