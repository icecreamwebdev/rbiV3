// pages/api/instagram
export default async function handler(req, res) {
    // Using a fetch here but could be any async operation to an external source
    const token = IGQVJYaEUxRV9zb1FZAVVRKQjdqa1UzNFhqT2FOSzBjVEZAEaml2TFRERVhpS3UwQjl4aHVhc1pRbXh2QmllS1hiSzByZA3NZALUJ0NlQ3Nk9rU1g5VEVzZAi1YTUtPYWRhcE5rMWFzdUFURGZAPMGo4UTVKYQZDZD
    const limit = 2
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${limit}&access_token=${token}`)
    const jsonData = await response.json()
    res.status(200).json(jsonData)
}