export const submitCode = (req, res) => {
    const { code, language } = req.body;
    console.log('Received code:', code);
    res.status(200).json({ message: 'Code received successfully!' });
  };
  