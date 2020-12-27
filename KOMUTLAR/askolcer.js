exports.run = async (client, msg, args) => {
    let kwejnbestoff=[
      "?İle Arandaki Sevgi %3 (Bu iş olmaz aga boşa ümitlenme :( ? )",
      "?İle Arandaki Sevgi %6 (Bu iş olmaz aga boşa ümitlenme :( ? ).",
      "?İle Arandaki Sevgi %9 (Bu iş olmaz aga boşa ümitlenme :( ? ).",
      "?İle Arandaki Sevgi %12 (Bu iş olmaz aga boşa ümitlenme :( ? ).",
      "?İle Arandaki Sevgi %18 ( Şansın Çok Düşük Bırak Bu İşleri Kanka❄️)",
      "?İle Arandaki Sevgi %20 ( Şansın Çok Düşük Bırak Bu İşleri Kanka❄️)",
      "?İle Arandaki Sevgi %23 ( Şansın Çok Düşük Bırak Bu İşleri Kanka❄️)",
      "?İle Arandaki Sevgi %26 ( Şansın Çok Düşük Bırak Bu İşleri Kanka❄️)",
      "?İle Arandaki Sevgi %29 ( Şansın Çok Düşük Bırak Bu İşleri Kanka❄️)",
      "?İle Arandaki Sevgi %30 ( Şansın Çok Düşük Bırak Bu İşleri Kanka❄️)",
      "?İle Arandaki Sevgi %33 (Az Bir Şey Şansın Var?)",
      "?İle Arandaki Sevgi %37 (Az Bir Şey Şansın Var?)",
      "?İle Arandaki Sevgi %40 (Az Bir Şey Şansın Var?)",
      "?İle Arandaki Sevgi %42 (Az Bir Şey Şansın Var?)",
      "?İle Arandaki Sevgi %45 (Az Bir Şey Şansın Var?)",
      "?İle Arandaki Sevgi %48 (Eh İşte) ",
      "?İle Arandaki Sevgi %50 (Yarı Yarıya Şansın Var5️⃣0️⃣) ",
      "?İle Arandaki Sevgi %51 (Yarımdan Fazla Şansın Var? ) ",
      "?İle Arandaki Sevgi %55 (Denemeye Değer?)",
      "?İle Arandaki Sevgi %58 (Şansını Bir Dene İstersen?)",
      "?İle Arandaki Sevgi %60 (Şansını Bir Dene İstersen?) .",
      "?İle Arandaki Sevgi %62 (Şansını Bir Dene İstersen?)",
      "?İle Arandaki Sevgi %66 (Şansını Bir Dene İstersen?)",
      "?İle Arandaki Sevgi %70 (Şansını Bir Dene İstersen?) .",
      "❤️İle Arandaki Sevgi %73 (Siz Bence Bir Yemeğe Çıkın?) .",
      "❤️İle Arandaki Sevgi %76 (Siz Bence Bir Yemeğe Çıkın?) .",
      "❤️İle Arandaki Sevgi %79 (Siz Bence Bir Yemeğe Çıkın?) .",
      "❤️İle Arandaki Sevgi %82 (Siz Bence Bir Yemeğe Çıkın?) .",
      "❤️İle Arandaki Sevgi %85 (Siz Bence Bir Yemeğe Çıkın?) .",
      "❣️İle Arandaki Sevgi %88 (Sizin Sevgili Olmanız Gerek⭐️) .",
      "❣️İle Arandaki Sevgi %90 (Sizin Sevgili Olmanız Gerek⭐️) .",
      "❣️İle Arandaki Sevgi %91 (Sizin Sevgili Olmanız Gerek⭐️) .",
      "❣️İle Arandaki Sevgi %92 (Sizin Sevgili Olmanız Gerek⭐️) .",
      "❣️İle Arandaki Sevgi %93 (Sizin Sevgili Olmanız Gerek⭐️) .",
      "?İle Arandaki Sevgi %94 (Siz Birbirinize Aitsiniz?) .",
      "?İle Arandaki Sevgi %95 (Siz Birbirinize Aitsiniz?) .",
      "?İle Arandaki Sevgi %96 (Siz Birbirinize Aitsiniz?) .",
      "?İle Arandaki Sevgi %97 (Siz Birbirinize Aitsiniz?) .",
      "?İle Arandaki Sevgi %98 (Siz Birbirinize Aitsiniz?) .",
      "?İle Arandaki Sevgi %99 (Sen Onun İçin Yaratılmışsın Galiba?) .",
      "???İle Arandaki Aşk %100 (wow Siz Birbiriniz İçin Yaratılmışsınız?) .",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Kimi Seviyorsun?')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${kwejnbestoff[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["aşk","aşkölçer","aşk-ölçer", "askolcer", "ask-olcer"],
    permLevel: 0
     
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }