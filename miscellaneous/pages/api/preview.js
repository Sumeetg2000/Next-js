export default function handler(req,res){
    res.setPreviewData({user:Sumeet})
    res.redirect(req.query.redirect)
}