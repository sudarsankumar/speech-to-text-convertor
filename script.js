const btn = document.querySelector('.talk')
const end = document.querySelector('.end')
const instructions = document.getElementById('instructions')
const content = document.querySelector('.content')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
var speech = ''
recognition.onstart= function()
{
    instructions.innerText = "Recognition is on\n Press Button to Stop"
    btn.style.display = "none"
    end.style.display = "block"
}
recognition.onspeechend = function()
{
    instructions.text("No activity")
    recognition.stop()
}
recognition.onerror = function()
{
    instructions.text("Try Again")
}
recognition.continuous = true
recognition.onresult = function(event) 
{
    const current = event.resultIndex
    const transcript = event.results[current][0].transcript
    speech += transcript
    content.innerText = speech
    console.log(transcript)
}
btn.addEventListener('click' ,() => {
    recognition.start()
})
end.addEventListener('click' ,() => {
    recognition.stop()
    window.location.reload()
})