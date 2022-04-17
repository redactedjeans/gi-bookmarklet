const eyeO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA2ElEQVRo3u2YQQ7DMAgEAz+NlLyqlfrU9l61TjEL7mHmbFusgIVk2wAAAACgClM+drs/nldnzmO3vxTyS/AdomyVCLUYqxDwKbjRHYUYU4mIBKN4IyVEGYA6Q76qxkf3ZnovVQ5XIt7vfDuvyI5ViZgpxUzpWkcmOsRYZyayfTI672oRKqKzyKvdqQuPuJZiJalaf1zVjNUizmO3UVWkGjfjXpEekNhvZlGMDMbs+mMVdatYIKPvWEcjRq10xiWXfiEqbb79m71qTpUOuZU/IwAAAAAAALp4AdJMqByFV3pvAAAAAElFTkSuQmCC';
const eyeX = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABEElEQVRo3u2YSw7CMAxEbYuLIsGpWqlHLatKqOrHv9gheFasHE9fxkkAKJVKpVKCMLuBaV7W7ff79VT3Q6MQoV5o/LSRITKyp2HJBwDAI3KrWJttSoS7z79NeNMwZ8QzrClELFuoBQ1VRs5MWBua5mW11MBIE1c0rCe8+RxpMYk02UNLcYkJLg3tGhRhgkP1rB6XDkaYkEwqbQ4pk4SEzh0ZijbBrSE1Q62nU9TpT5KGIq8k0rUw6wD0ziZavsxdcakRy4dDL9T7xSJNuIZdm5+r7EkGjOsk2hbm0PB+Taqeukf3JEuQPcZ885ur9+Uw5M+HzGcARtHo5mTvXTgCjaGIUM8B/ksipVKpVCqVRtIH7MHQPRZ6xI4AAAAASUVORK5CYII=';

const chests = document.getElementById('13');
chests.style='position:relative';
console.log(chests);

let action = document.getElementById('13-toggle');
if (action === null) {
  action = document.createElement('img');
  action.id = '13-toggle';
}
action.classList = 'filter-panel__labels-title-action';
action.src=eyeO;
action.title='Show All';
action.alt='Show All';
action.style="position:absolute;top:.1rem;right:0;height:.24rem;width:.24rem;cursor:pointer;";
chests.querySelector('.filter-panel__labels-title').appendChild(action);

action.onclick = (e => {
  [...chests.querySelectorAll('.filter-item')]
    .forEach(item => item.click());
});