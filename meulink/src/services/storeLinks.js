export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;

}

export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);
    const hasLink = linksStored.some(Link => Link.id === newLink.id);

    if (hasLink) {
        console.log('already exit')
        return;
    }
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('save!');
}

export function deleteLink(Links, id) {
    let myLinks = Links.filter(item => {
        return (item.id !== id)
    })
    localStorage.setItem('@shortLink', JSON.stringify(myLinks));
    console.log('delete ok!')
    return myLinks;
}