export const treatmentsData = [
  {
    id: 'laser',
    name: 'Laser Dentistry',
    image: '/laser-premium.webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    catchy: 'Precision, Sterility, and Faster Recovery with Medical-Grade Diode Lasers.',
    desc: 'At DentiQ, we leverage state-of-the-art Medical Grade Diode Lasers to transform the patient experience. By replacing traditional scalpels and drills for soft-tissue procedures, we offer a treatment path that is virtually bloodless, significantly less painful, and promotes dramatically faster healing.',
    benefits: [
      { title: 'Bloodless Procedures', desc: 'The laser cauterizes blood vessels as it treats, eliminating the need for traditional surgery and sutures.' },
      { title: 'Needle-Free Experience', desc: 'Many of our laser treatments require little to no local anesthesia, perfect for patients with dental anxiety.' },
      { title: 'Natural Sterilization', desc: 'The high-energy laser light instantly kills bacteria in the treatment area, lowering infection risks.' },
      { title: 'Accelerated Healing', desc: 'Laser energy stimulates cellular regeneration (Biostimulation), leading to significantly faster recovery.' }
    ],
    services: [
      { name: 'Laser Frenectomy', detail: 'Gentle removal of restrictive tissue under the tongue or lip to improve speech and feeding in children and adults.' },
      { name: 'Gum Depigmentation', detail: 'Safe removal of dark melanin spots on the gums to restore a natural, healthy pink appearance.' },
      { name: 'Laser Periodontal Therapy', detail: 'Decontaminating deep gum pockets and killing harmful bacteria to treat gum disease without surgery.' },
      { name: 'Cosmetic Gum Contouring', detail: 'Aesthetic reshaping of a "gummy smile" or uneven gum line with pinpoint clinical precision.' },
      { name: 'Mouth Ulcer & Cold Sore Relief', detail: 'Immediate pain relief and halved healing time for painful oral ulcers and fever blisters.' },
      { name: 'Advanced Root Canal Disinfection', detail: 'Using laser energy to reach and sterilize microscopic areas within the root canal that traditional tools can’t reach.' },
      { name: 'Tooth Sensitivity Treatment', detail: 'Instant sealing of exposed tooth tubules to provide long-lasting relief from hot and cold sensitivity.' }
    ],
    faqs: [
      { q: 'Is laser dentistry painful?', a: 'Most patients describe the sensation as a "slight warmth" rather than pain. Because lasers seal nerve endings, many procedures can be done without any anesthetic injections.' },
      { q: 'Is it safe for children?', a: 'Yes, laser dentistry is exceptionally safe for children, particularly for frenectomies (tongue-ties) and cavity management, as it reduces the "scary" noises and vibrations of a drill.' },
      { q: 'Why is it better than traditional methods?', a: 'Traditional methods often involve cutting and stitching. Lasers use light energy to vaporize tissue, resulting in no bleeding, no stitches, and a much lower risk of post-operative swelling.' },
      { q: 'Does it take longer?', a: 'Actually, many laser procedures are faster than traditional surgery. For example, a root canal disinfection that used to take multiple visits can often be completed more effectively in a single sitting.' }
    ],
    care: {
      pre: [
        'Eat a balanced meal before your appointment unless sedation is planned.',
        'Inform your specialist if you are taking blood-thinning medications.',
        'Wear comfortable, loose-fitting clothing for your visit.'
      ],
      post: [
        'Stick to a soft food diet (yogurt, eggs, smoothies) for the first 24-48 hours.',
        'Avoid spicy, crunchy, or very hot foods that might irritate the treated area.',
        'Rinse gently with warm salt water if directed; avoid vigorous spitting or using straws.',
        'Maintain gentle oral hygiene, avoiding direct brushing on the treated site for the first few days.'
      ]
    },
    cta: 'Experience Laser Precision: +91 84894 88999'
  },
  {
    id: 'surgery',
    name: 'Cosmetic Surgery',
    image: '/Cosmetic Surgery.webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`,
    catchy: 'Artistic Facial Harmonization & Precision Cosmetic Surgery.',
    desc: 'At DentiQ, our Cosmetic Surgery department specializes in balancing facial features and restoring youthful contours. As maxillofacial experts, we possess a unique understanding of facial bone structure, allowing us to perform procedures like Rhinoplasty and Genioplasty with unmatched precision and natural-looking results. We believe in "Profile Balancing"—harmonizing the nose, chin, and jawline for a flawless aesthetic.',
    benefits: [
      { title: '3D Digital Simulation', desc: 'Preview your potential results before surgery using our advanced 3D imaging technology, ensuring your vision matches our plan.' },
      { title: 'Maxillofacial Expertise', desc: 'Unlike general surgeons, we are specialists in facial bone structure, which is the foundation of all lasting aesthetic beauty.' },
      { title: 'Minimally Invasive Lifts', desc: 'We offer "Mini-Lifts" and advanced contouring techniques that provide significant rejuvenation with minimal downtime.' },
      { title: 'Natural Harmonization', desc: 'Our goal is never to change who you look like, but to enhance your natural features to their most balanced and youthful state.' }
    ],
    services: [
      { name: 'Rhinoplasty (Nose Reshaping)', detail: 'Precision surgical refinement of the nose to improve facial symmetry, profile balance, and breathing function.' },
      { name: 'Genioplasty (Chin Augmentation)', detail: 'Surgical reshaping or advancement of the chin to create a stronger jawline and a more balanced profile.' },
      { name: 'Blepharoplasty (Eyelid Surgery)', detail: 'Removal of excess skin and "bags" from the upper and lower eyelids to restore a rested, youthful appearance.' },
      { name: 'Buccal Fat Contouring', detail: 'Strategic removal of cheek fat pads to create a more defined, "chiseled" facial structure.' },
      { name: 'Facial Liposuction & Contouring', detail: 'Precision removal of stubborn fat from the neck and jawline to define the lower face.' },
      { name: 'Non-Surgical Rejuvenation', detail: 'Expert application of Botox and Dermal Fillers to smooth wrinkles and restore volume with zero downtime.' }
    ],
    faqs: [
      { q: 'How long is the recovery for a Rhinoplasty?', a: 'While initial swelling and bruising last about 1-2 weeks, most patients return to work within 10 days. The final refined shape of the nose continues to emerge over several months.' },
      { q: 'Will my results look natural?', a: 'Yes. Our philosophy is "Conservative Refinement." We focus on small, precise changes that harmonize your features rather than making you look like someone else.' },
      { q: 'Is facial cosmetic surgery safe?', a: 'At DentiQ, safety is our highest priority. All surgical procedures are performed in our hospital-grade suites with board-certified anesthesia support and advanced monitoring.' },
      { q: 'Can I combine procedures?', a: 'Absolutely. Many patients choose "Profile Balancing," which combines Rhinoplasty and Genioplasty in a single session for a complete aesthetic transformation.' }
    ],
    care: {
      pre: [
        'A comprehensive facial analysis and 3D simulation session will be scheduled to plan your surgery.',
        'Avoid blood-thinning supplements and certain medications for 2 weeks prior to surgery.',
        'Arrange for a companion to assist you during the first 24 hours of your recovery.'
      ],
      post: [
        'Keep your head elevated at a 45-degree angle while sleeping for the first week to minimize swelling.',
        'Apply cold compresses to the surrounding areas (not directly on the surgical site) for the first 48 hours.',
        'Avoid strenuous exercise, heavy lifting, or any activity that increases blood pressure for at least 3 weeks.',
        'Strictly follow your wound-cleaning protocol and attend all scheduled follow-up visits for suture removal and monitoring.'
      ]
    },
    cta: 'Facial Aesthetic Consultation: +91 84894 88999'
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic Dentistry',
    image: '/Cosmetic Dentistry.webp.png',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`,
    catchy: 'Precision Smile Design & Minimally Invasive Esthetics.',
    desc: 'At DentiQ, we specialize in Digital Smile Design (DSD), a technology that allows you to see your new smile before we even begin. From ultra-thin laminates to professional whitening, we combine clinical precision with artistic vision to create a smile that is uniquely yours.',
    benefits: [
      { title: 'Digital Predictability', desc: 'Visualize your final result in 3D before any procedure begins, ensuring total alignment with your goals.' },
      { title: 'Minimally Invasive', desc: 'Our "No-Prep" laminates preserve your natural enamel while delivering a flawless aesthetic transformation.' },
      { title: 'Golden Ratio Precision', desc: 'We analyze your facial symmetry and lip lines to design teeth that look natural and balanced.' },
      { title: 'Long-Lasting Results', desc: 'Using premium Swiss and German porcelain materials that are stain-resistant and durable for 15+ years.' }
    ],
    services: [
      { name: 'Digital Smile Designing', detail: 'A comprehensive transformation using 3D scanning and photography to plan your perfect smile.' },
      { name: 'Porcelain Laminates (No-Prep)', detail: 'Ultra-thin (0.5mm) shells that correct gaps and chips without the need for enamel removal.' },
      { name: 'Traditional Dental Veneers', detail: 'Durable porcelain restorations for correcting deeper discoloration or structural alignment issues.' },
      { name: 'Professional Teeth Whitening', detail: 'Enamel-safe, LED-activated treatments that can lighten your teeth by up to 8 shades in one visit.' },
      { name: 'Gum Contouring (Laser)', detail: 'Painless correction of "gummy smiles" to create a more balanced ratio between teeth and gums.' },
      { name: 'Composite Bonding', detail: 'Quick and effective repair for minor chips or spaces using high-grade aesthetic resin.' }
    ],
    faqs: [
      { q: 'Will cosmetic dentistry damage my teeth?', a: 'No. Modern techniques like DSD and no-prep laminates are designed to be minimally invasive, preserving as much of your natural tooth structure as possible.' },
      { q: 'How long do veneers last?', a: 'With proper care, high-quality porcelain veneers and laminates can last between 10 to 15 years, or even longer.' },
      { q: 'Is the teeth whitening safe for my enamel?', a: 'Yes. We use pH-balanced whitening gels and LED technology that lifts stains without affecting the structural integrity of your enamel.' },
      { q: 'Can I see the results before starting?', a: 'Absolutely. That is the core of our Digital Smile Design process—you will see a digital simulation and even a physical "mock-up" of your new smile first.' }
    ],
    care: {
      pre: [
        'A comprehensive dental health check is required to ensure your gums are healthy before cosmetic work.',
        'Professional cleaning is recommended to provide a clean canvas for bonding or whitening.',
        'High-resolution photos will be taken for your Digital Smile Design plan.'
      ],
      post: [
        'Avoid highly pigmented foods (coffee, red wine, turmeric) for 48 hours after whitening.',
        'Wear a nightguard if you have a habit of clenching your teeth to protect your new veneers.',
        'Maintain regular 6-month checkups and professional cleanings to ensure the longevity of your restorations.'
      ]
    },
    cta: 'Design Your New Smile: +91 84894 88999'
  },
  {
    id: 'implants',
    name: 'Implant Dentistry',
    image: '/Implant Dentistry.webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 10v4a5 5 0 0 0 10 0v-4"/><path d="M12 2v8"/><path d="M12 19v3"/></svg>`,
    catchy: 'Permanent, Lifelike Tooth Replacement with 3D Guided Precision.',
    desc: 'At DentiQ, we specialize in high-precision Implant Dentistry using 3D Computer-Guided surgery. Whether you need a single tooth replacement or a full-arch transformation (All-on-4), we use premium titanium and zirconia implants to restore your smile with a 98% success rate and a natural look and feel.',
    benefits: [
      { title: '3D Computer-Guided Surgery', desc: 'We use 3D CBCT scans and virtual planning to place your implants with microscopic precision, minimizing surgery time and trauma.' },
      { title: 'Same-Day Teeth', desc: 'With immediate loading technology, many patients can walk out with a fully functional temporary tooth on the same day as their surgery.' },
      { title: 'Bone-Anchored Stability', desc: 'Implants act like natural tooth roots, stimulating the jawbone and preventing the facial "sagging" that often follows tooth loss.' },
      { title: 'Lifetime Performance', desc: 'Unlike bridges or dentures, dental implants are designed to be a permanent solution, lasting for decades with proper care.' }
    ],
    services: [
      { name: 'Single & Multiple Tooth Implants', detail: 'Independent tooth replacements that don’t require grinding down neighboring healthy teeth.' },
      { name: 'All-on-4 / All-on-6 Rehabilitation', detail: 'A revolutionary technique to replace an entire arch of missing teeth with just 4 to 6 strategically placed implants.' },
      { name: 'Zygomatic Implants', detail: 'Specialized implants for patients with severe bone loss who were previously told they "aren’t candidates" for standard implants.' },
      { name: 'Immediate Loading Implants', detail: 'Advanced protocols that allow for the placement of a temporary crown immediately after the implant is placed.' },
      { name: 'Sinus Lift & Bone Grafting', detail: 'Regenerative procedures to rebuild jawbone density and create a solid foundation for successful implantation.' },
      { name: 'Zirconia (Metal-Free) Implants', detail: 'A high-aesthetic, hypoallergenic alternative to traditional titanium for patients with sensitivities.' }
    ],
    faqs: [
      { q: 'Is the implant procedure painful?', a: 'Most patients are surprised by how comfortable the procedure is. We use local anesthesia or IV sedation, and the recovery is typically easier than a tooth extraction.' },
      { q: 'How long do dental implants last?', a: 'Dental implants are designed to be a lifetime solution. With good oral hygiene and regular checkups, the implant itself should last for the rest of your life.' },
      { q: 'Am I a candidate if I have bone loss?', a: 'Yes. Thanks to modern techniques like Zygomatic implants and bone grafting, we can successfully place implants for almost any patient, even those with significant bone loss.' },
      { q: 'How long does the entire process take?', a: 'While the surgery is quick, the bone needs 3-6 months to fuse with the implant. However, we often provide temporary "same-day" teeth so you are never without a smile.' }
    ],
    care: {
      pre: [
        'A high-resolution 3D CBCT scan is required to map your bone density and nerve positions for the digital surgical guide.',
        'Inform your specialist about all medications, especially those for bone density or blood pressure.',
        'Smoking significantly lowers implant success rates; we recommend pausing for 2 weeks before and after surgery.'
      ],
      post: [
        'Stick to a soft-food diet (yogurt, shakes, mashed foods) for the first 7-10 days while the site heals.',
        'Avoid drinking through a straw or aggressive rinsing, as this can disturb the surgical site.',
        'Maintain impeccable oral hygiene, but be extremely gentle around the implant site for the first week.',
        'Attend your 3-month integration checkup to ensure the bone is fusing perfectly before we place your final crown.'
      ]
    },
    cta: 'Implant Consultation: +91 84894 88999'
  },
  {
    id: 'maxillofacial',
    name: 'Oral & Maxillofacial Surgery',
    image: '/Oral & Maxillofacial Surgery .webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    catchy: 'Expert Surgical Precision with Virtual 3D Planning.',
    desc: 'At DentiQ, our Maxillofacial department combines board-certified surgical expertise with the latest in Virtual Surgical Planning (VSP). We handle everything from complex wisdom tooth extractions to advanced reconstructive jaw surgery and facial trauma, ensuring the highest standards of safety and aesthetic recovery.',
    benefits: [
      { title: '3D CBCT Precision', desc: 'We use high-resolution Cone Beam CT scans to map nerves and bone structure in 3D before every surgery.' },
      { title: 'Virtual Planning', desc: 'Complex jaw and facial surgeries are simulated digitally first, allowing for "surgery-first" predictability and faster results.' },
      { title: 'Advanced Anesthesia', desc: 'Safe, in-office sedation options managed by specialists to ensure a completely stress-free experience.' },
      { title: 'Hospital-Grade Safety', desc: 'Our surgical suites are equipped with state-of-the-art monitoring and sterilization technology matching hospital standards.' }
    ],
    services: [
      { name: 'Impacted Wisdom Tooth Surgery', detail: 'Painless, laser-assisted removal of impacted teeth to prevent infection and crowding.' },
      { name: 'Orthognathic (Jaw) Surgery', detail: 'Corrective surgery to treat jaw misalignment, improve facial aesthetics, and resolve sleep apnea.' },
      { name: 'Facial Trauma Management', detail: 'Expert reconstruction for fractures of the jaw, nose, and orbital bones with focus on restoring symmetry.' },
      { name: 'TMJ Disorder Treatment', detail: 'Minimally invasive management of jaw joint pain, clicking, and restricted movement.' },
      { name: 'Oral Pathology & Tumors', detail: 'Specialized diagnosis and surgical removal of benign tumors, cysts, and salivary gland diseases.' },
      { name: 'Cleft Lip & Palate Surgery', detail: 'Comprehensive surgical care to restore function and aesthetics for congenital facial conditions.' }
    ],
    faqs: [
      { q: 'Will I be asleep during the surgery?', a: 'We offer various levels of sedation, from local anesthesia to deep sedation (IV sedation), depending on the complexity of the procedure and your comfort level.' },
      { q: 'What is the recovery time for jaw surgery?', a: 'While initial healing takes 1-2 weeks, we use Virtual Surgical Planning to minimize surgical time, which often leads to a faster and more comfortable recovery compared to traditional methods.' },
      { q: 'Why do I need a 3D scan?', a: 'Standard X-rays are 2D. A 3D CBCT scan allows us to see the exact position of nerves and roots, which is critical for avoiding complications and ensuring surgical precision.' },
      { q: 'Can I go home the same day?', a: 'Most oral and maxillofacial procedures at DentiQ, including wisdom tooth surgery and minor jaw corrections, are performed as day-cases, allowing you to recover in the comfort of your home.' }
    ],
    care: {
      pre: [
        'If receiving IV sedation, do not eat or drink anything for 6-8 hours prior to your surgery.',
        'Arrange for a responsible adult to drive you home and stay with you for a few hours post-surgery.',
        'Inform your surgeon about any supplements or blood-thinning medications you are currently taking.'
      ],
      post: [
        'Use ice packs on the outside of your face for the first 24 hours to minimize swelling.',
        'Maintain a soft-food or liquid diet (smoothies, soups, mashed potatoes) as instructed.',
        'Keep your head elevated while sleeping for the first 2-3 nights to reduce inflammation.',
        'Avoid strenuous physical activity for at least 3-5 days to allow the surgical site to stabilize.'
      ]
    },
    cta: 'Specialist Surgery Consultation: +91 84894 88999'
  },
  {
    id: 'pedodontics',
    name: 'Pediatric Dentistry',
    image: '/Indian Child in Pediatric Dentistry.webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 1 5 5c0 2.39-1.19 4.47-3 5.48v2.52l3 3V22H7v-4l3-3v-2.52c-1.81-1.01-3-3.09-3-5.48a5 5 0 0 1 5-5z"/></svg>`,
    catchy: 'Fear-Free Dental Care for Happy, Healthy Smiles.',
    desc: 'At DentiQ, we specialize in creating a fun, stress-free environment for our youngest patients. Using our "Tell-Show-Do" philosophy and advanced painless lasers, we ensure that your child’s first dental experiences are positive, building a foundation for a lifetime of healthy habits and radiant smiles.',
    benefits: [
      { title: 'Pain-Free Laser Care', desc: 'We use specialized pediatric lasers for cavity treatments, which often eliminates the need for "scary" drills and numbing injections.' },
      { title: 'Tell-Show-Do Method', desc: 'Our specialists use evidence-based behavior management to build trust by explaining and showing every step before it happens.' },
      { title: 'Sensory-Adapted Zone', desc: 'Our kids’ area is designed with calming colors and entertainment to distract and soothe even the most anxious little ones.' },
      { title: 'Prevention First', desc: 'We focus on proactive care like sealants and fluoride to stop cavities before they ever have a chance to start.' }
    ],
    services: [
      { name: 'Laser Cavity Treatment', detail: 'Advanced "no-drill" decay removal that is quieter, faster, and much more comfortable for children.' },
      { name: 'Pit & Fissure Sealants', detail: 'Protective coatings applied to the deep grooves of molars to prevent food and bacteria from causing decay.' },
      { name: 'Habit-Breaking Appliances', detail: 'Custom-made devices to gently help children stop thumb-sucking or tongue-thrusting habits that can affect jaw growth.' },
      { name: 'Pediatric Root Canal (Pulpotomy)', detail: 'Saving infected baby teeth to maintain space for permanent teeth and ensure proper speech development.' },
      { name: 'Fluoride Varnish Therapy', detail: 'Quick, high-concentration fluoride application to strengthen enamel and make teeth resistant to acid attacks.' },
      { name: 'Space Maintainers', detail: 'Custom appliances used if a baby tooth is lost early, ensuring the permanent tooth has a clear path to erupt correctly.' }
    ],
    faqs: [
      { q: 'When should my child have their first dental visit?', a: 'The American Academy of Pediatric Dentistry recommends the "First Visit by First Birthday." This allows us to monitor growth and provide early preventative care.' },
      { q: 'Are dental lasers safe for children?', a: 'Absolutely. In fact, they are often safer and more comfortable than traditional tools because they are highly precise and provide natural sterilization of the area.' },
      { q: 'Why treat baby teeth if they are going to fall out?', a: 'Baby teeth are critical for proper chewing, speech development, and guiding permanent teeth into the correct position. Untreated decay in baby teeth can also cause severe pain and infection.' },
      { q: 'What if my child is very scared of the dentist?', a: 'We are experts in "Dental Fear Management." From our specialized kid-friendly language to nitrous oxide (laughing gas) for extra comfort, we have many ways to make your child feel safe.' }
    ],
    care: {
      pre: [
        'Talk to your child about the visit in positive, simple terms; avoid words like "pain," "shot," or "drill."',
        'Schedule appointments during your child\'s "best" time of day, usually in the morning when they are rested.',
        'Allow your child to bring a favorite small toy or "comfort item" to the appointment.'
      ],
      post: [
        'Supervise your child\'s brushing twice daily using a pea-sized amount of fluoride toothpaste.',
        'Encourage water as the primary drink and limit sugary snacks or sticky candies that can cling to teeth.',
        'If a sealant or fluoride was applied, follow the specific instructions regarding eating and drinking (usually waiting 30-60 mins).',
        'Maintain a 6-month checkup schedule so we can catch and prevent issues before they become painful.'
      ]
    },
    cta: 'Book a Fun Dental Visit: +91 84894 88999'
  },
  {
    id: 'conservative',
    name: 'Conservative Dentistry',
    image: '/Conservative Dentistry .webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8 2 4 5.5 4 9c0 2.5 1.5 4.5 3 6l1 5h8l1-5c1.5-1.5 3-3.5 3-6 0-3.5-4-7-8-7z"/></svg>`,
    catchy: 'Preserving Your Natural Smile with Biomimetic Precision.',
    desc: 'At DentiQ, we follow a "Less is More" philosophy. Our Conservative department focuses on Biomimetic Dentistry—restoring teeth using advanced materials and adhesive techniques that mimic natural enamel and dentin. By preserving maximum healthy tooth structure, we often eliminate the need for aggressive crowns and reduce the likelihood of future root canals.',
    benefits: [
      { title: 'Biomimetic Restoration', desc: 'We use advanced materials that bond, flex, and behave like natural teeth, reducing the risk of cracks and failures.' },
      { title: 'Maximum Preservation', desc: 'Our techniques focus on saving every millimeter of healthy enamel, unlike traditional crowns that require heavy drilling.' },
      { title: 'Leak-Proof Sealing', desc: 'Superior adhesive technology creates a powerful barrier against bacteria, preventing future decay under the filling.' },
      { title: 'Reduced Sensitivity', desc: 'Precision bonding and biomimetic layering significantly lower the chance of post-operative tooth sensitivity.' }
    ],
    services: [
      { name: 'Biomimetic Direct Restorations', detail: 'High-tech composite layering that restores the natural strength and mechanics of a decayed tooth.' },
      { name: 'Ceramic Inlays & Onlays', detail: 'Custom-fabricated porcelain "puzzle pieces" that fit perfectly into damaged teeth, offering far more strength than standard fillings.' },
      { name: 'Minimally Invasive Fillings', detail: 'Using precise techniques to remove only the decayed portion while leaving healthy tooth structure untouched.' },
      { name: 'Aesthetic Composite Bonding', detail: 'Artistic repair of minor chips, gaps, and worn-out edges with zero to minimal enamel removal.' },
      { name: 'Enamel Preservation Therapy', detail: 'Preventative treatments using high-grade sealants and remineralization to stop decay before it starts.' }
    ],
    faqs: [
      { q: 'What is Biomimetic Dentistry?', a: 'It is an advanced branch of dentistry that uses nature as a model. We use specialized materials and bonding protocols that mimic the tooth\'s natural properties, ensuring the restoration lasts longer and feels more natural.' },
      { q: 'Is an onlay better than a crown?', a: 'Yes, whenever possible. A crown requires removing 60-70% of your tooth structure. An onlay is a "partial crown" that saves the healthy parts of your tooth while providing the same strength and durability.' },
      { q: 'Will my fillings look natural?', a: 'Absolutely. We use premium aesthetic resins and ceramics that are color-matched to your natural teeth, making the restoration virtually invisible.' },
      { q: 'Does conservative dentistry cost more?', a: 'While the precision and materials used are premium, it is more cost-effective over time because it preserves your natural tooth and reduces the need for expensive future replacements or root canals.' }
    ],
    care: {
      pre: [
        'A thorough diagnostic scan is performed to determine the exact extent of decay and choose the most conservative approach.',
        'High-resolution photography is used to match the restoration color perfectly to your natural enamel.',
        'If an indirect inlay/onlay is planned, a digital impression (3D scan) will be taken.'
      ],
      post: [
        'Avoid extremely cold or hot drinks for the first 24 hours while the bonding matures.',
        'Wait for the numbness to wear off completely before eating to avoid accidental biting of your lip or tongue.',
        'Maintain excellent flossing habits around the restoration to ensure the "bond" stays clean and healthy for years to come.'
      ]
    },
    cta: 'Preserve Your Natural Teeth: +91 84894 88999'
  },
  {
    id: 'endodontics',
    name: 'Endodontics',
    image: '/Implant Dentistry.webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8 2 4 5.5 4 9c0 2.5 1.5 4.5 3 6l1 5h8l1-5c1.5-1.5 3-3.5 3-6 0-3.5-4-7-8-7z"/></svg>`,
    catchy: 'Relieving Pain & Saving Your Natural Smile in a Single Visit.',
    desc: 'At DentiQ, we specialize in high-tech, single-sitting root canal treatments. Using advanced WaveOne Gold rotary technology and laser-assisted sterilization, we eliminate infection and save your natural teeth with maximum comfort and clinical precision. Our goal is to make root canals as routine and painless as a standard filling.',
    benefits: [
      { title: 'Single-Sitting Efficiency', desc: 'Most root canals are completed in just one appointment, reducing anxiety and the risk of inter-visit contamination.' },
      { title: 'Laser Sterilization', desc: 'We use medical-grade lasers to reach and kill bacteria in microscopic areas of the canal that traditional tools simply cannot reach.' },
      { title: 'WaveOne Gold Safety', desc: 'Our reciprocating rotary system uses heat-treated gold metallurgy, which is more flexible and resistant to breakage than standard files.' },
      { title: 'Apex Locator Precision', desc: 'Digital mapping of the root length ensures we clean and seal the entire canal without the need for excessive X-rays.' }
    ],
    services: [
      { name: 'Single-Sitting Root Canal', detail: 'Efficient, painless cleaning and sealing of the infected tooth in a single clinical session.' },
      { name: 'WaveOne Gold Rotary Treatment', detail: 'Advanced "reciprocating" technology that makes canal preparation faster, safer, and more predictable.' },
      { name: 'Laser-Assisted Disinfection', detail: 'Using high-energy light to decontaminate deep within the root canal system for superior healing.' },
      { name: '3D Thermoplastic Injectable Filling', detail: 'A state-of-the-art technique that creates a perfect, airtight seal inside the root canal using heated material.' },
      { name: 'Plasma Arc Internal Bleaching', detail: 'Safe removal of internal tooth stains that often occur after a tooth has suffered nerve damage.' },
      { name: 'Apicoectomy (Endodontic Surgery)', detail: 'A precise microsurgical procedure to save a tooth when a conventional root canal is not sufficient.' }
    ],
    faqs: [
      { q: 'Are root canals painful?', a: 'Modern root canals are not painful. With advanced local anesthesia and rotary technology, most patients find it no different than getting a standard filling.' },
      { q: 'Can a root canal really be done in one visit?', a: 'Yes. Thanks to the WaveOne system and digital apex locators, we can thoroughly clean and seal most infections in a single sitting, saving you time and discomfort.' },
      { q: 'Why do I need a crown after a root canal?', a: 'After a root canal, the tooth becomes brittle because it no longer has a blood supply. A crown protects the tooth from fracturing under normal biting pressure.' },
      { q: 'Is a root canal better than pulling the tooth?', a: 'Always. Saving your natural tooth is the best option for maintaining your bite alignment and preventing the bone loss that follows tooth extraction.' }
    ],
    care: {
      pre: [
        'A digital X-ray or 3D scan will be taken to map the exact anatomy of the infected root.',
        'Inform your specialist if you are experiencing swelling or severe throbbing pain before the visit.',
        'It is safe to eat a normal meal before the procedure unless otherwise instructed.'
      ],
      post: [
        'Do not chew on the treated side until your permanent crown or final restoration is placed.',
        'Mild soreness for 24-48 hours is normal and can be easily managed with prescribed over-the-counter medication.',
        'Maintain gentle brushing and flossing; avoid sticky candies that might dislodge the temporary filling.',
        'Follow up within 1-2 weeks for the placement of your final protective crown to ensure the long-term success of the treatment.'
      ]
    },
    cta: 'Emergency Root Canal Care: +91 84894 88999'
  },
  {
    id: 'periodontics',
    name: 'Periodontics',
    image: '/Periodontics (Gum Health Dentistry Speciality).webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    catchy: 'Advanced Gum Health & Laser-Assisted Tissue Regeneration.',
    desc: 'At DentiQ, we specialize in modern Periodontics with a focus on the oral-systemic health connection. We use the FDA-cleared LANAP protocol—a laser-based treatment that eliminates gum disease without scalpels or stitches. By managing oral inflammation, we not only save your teeth but also protect your overall health, including heart and metabolic wellness.',
    benefits: [
      { title: 'Minimally Invasive LANAP', desc: 'A revolutionary laser treatment that removes only infected tissue while leaving healthy gums intact—no scalpels or stitches required.' },
      { title: 'Systemic Health Protection', desc: 'Treating gum disease reduces chronic inflammation, which is linked to lower risks of heart disease, stroke, and diabetes complications.' },
      { title: 'Rapid Recovery', desc: 'Most patients return to their normal work and social routines within 24 to 48 hours after laser periodontal therapy.' },
      { title: 'Bone & Tissue Regeneration', desc: 'Our laser protocols stimulate the body’s natural ability to regrow lost bone and reattach gum tissue around the teeth.' }
    ],
    services: [
      { name: 'LANAP (Laser Gum Therapy)', detail: 'State-of-the-art treatment for moderate to severe gum disease that encourages natural tissue reattachment.' },
      { name: 'Scaling & Root Planing', detail: 'Deep clinical cleaning to remove plaque and tartar from below the gum line and smooth the tooth roots.' },
      { name: 'Soft Tissue Gum Grafting', detail: 'Microsurgical procedures to cover exposed roots and stop gum recession, restoring a healthy gum line.' },
      { name: 'Bone Regeneration Surgery', detail: 'Using advanced grafting materials to restore bone lost to periodontal disease and provide a stable foundation for teeth.' },
      { name: 'Dental Implant Maintenance', detail: 'Specialized care for implants (Peri-implantitis treatment) to ensure their lifelong health and stability.' },
      { name: 'Gummy Smile Correction', detail: 'Aesthetic laser contouring to remove excess gum tissue and reveal more of your natural tooth structure.' }
    ],
    faqs: [
      { q: 'How is laser therapy different from traditional gum surgery?', a: 'Traditional surgery involves cutting the gums and using stitches. LANAP uses a precise laser to vaporize bacteria and diseased tissue only, meaning less pain, no bleeding, and no stitches.' },
      { q: 'Can gum disease affect my heart health?', a: 'Yes. Chronic gum inflammation allows oral bacteria to enter the bloodstream, which research links to an increased risk of heart disease, stroke, and difficulty managing diabetes.' },
      { q: 'Is gum disease reversible?', a: 'In its early stage (Gingivitis), it is fully reversible with professional cleaning. In advanced stages (Periodontitis), we can stop the progression and regenerate lost tissue using our laser protocols.' },
      { q: 'How often should I have a periodontal checkup?', a: 'For patients with a history of gum disease, we recommend "Periodontal Maintenance" cleanings every 3 to 4 months to prevent the bacteria from returning.' }
    ],
    care: {
      pre: [
        'A comprehensive periodontal probing (pocket depth measurement) is required to map the extent of the disease.',
        'X-rays or 3D scans will be taken to assess bone levels around the roots.',
        'Continue all prescribed heart or diabetes medications unless otherwise instructed by your specialist.'
      ],
      post: [
        'Stick to a very soft diet (pasta, fish, mashed vegetables) for the first few days to allow the gums to reattach.',
        'Avoid using straws or vigorous spitting for 48 hours to protect the delicate healing site.',
        'Follow a strict specialized rinsing protocol instead of brushing directly on the treated area for the first week.',
        'Attend your follow-up "occlusal adjustment" if scheduled to ensure your bite is balanced for optimal healing.'
      ]
    },
    cta: 'Protect Your Gum Health: +91 84894 88999'
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics & Dentofacial Orthopedics',
    image: '/Orthodontics and Dentofacial.webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5v14"/></svg>`,
    catchy: 'Sculpting Confident Smiles & Harmonious Facial Growth.',
    desc: 'At DentiQ, we go beyond just straightening teeth. Our Orthodontics & Dentofacial Orthopedics department specializes in guiding the growth of the jaw and facial skeleton in children (Phase-One treatment), while providing advanced invisible aligner solutions for adults. We combine artistic vision with 3D digital planning to create smiles that are healthy, functional, and aesthetically stunning.',
    benefits: [
      { title: '3D Digital Simulation', desc: 'Preview your final smile in 3D before treatment even begins. We use digital mapping to plan every millimeter of tooth movement.' },
      { title: 'Growth Modification', desc: 'For our younger patients, we can guide the development of the jaw bones, often eliminating the need for complex surgeries later in life.' },
      { title: 'Faster, Comfortable Braces', desc: 'We use advanced self-ligating systems (like Damon) that reduce friction, leading to faster tooth movement and fewer clinical adjustments.' },
      { title: 'Socially Invisible Options', desc: 'From clear aligners to lingual (hidden) braces, we offer solutions that allow you to transform your smile without anyone noticing.' }
    ],
    services: [
      { name: 'Clear Aligner Therapy', detail: 'The ultimate in comfort and aesthetics—removable, transparent trays that gradually straighten your teeth without wires.' },
      { name: 'Self-Ligating Braces', detail: 'High-tech braces that use specialized clips instead of elastics, offering a more efficient and comfortable treatment experience.' },
      { name: 'Dentofacial Orthopedics', detail: 'Specialized appliances to guide jaw growth in children, correcting underbites, overbites, and narrow dental arches early.' },
      { name: 'Ceramic Aesthetic Braces', detail: 'Tooth-colored brackets made of translucent ceramic that blend perfectly with your natural enamel.' },
      { name: 'Lingual (Hidden) Braces', detail: 'Custom-made braces placed on the back side of your teeth, making them completely invisible from the front.' },
      { name: 'Phase-One Early Intervention', detail: 'Targeted treatment for children (ages 7-9) to create space for permanent teeth and normalize jaw development.' }
    ],
    faqs: [
      { q: 'Is there a difference between orthodontics and dentofacial orthopedics?', a: 'Yes. Orthodontics focuses on moving the teeth, while dentofacial orthopedics manages the actual growth and development of the jaw and facial skeleton. We provide both to ensure a harmonious result.' },
      { q: 'Am I too old for orthodontic treatment?', a: 'Never! Adult orthodontics is one of our fastest-growing areas. With clear aligners and lingual braces, you can achieve a perfect smile comfortably at any age.' },
      { q: 'How long does the treatment typically take?', a: 'Depending on the complexity, treatment can range from 6 to 24 months. Our use of self-ligating braces and digital planning often shortens this duration compared to traditional methods.' },
      { q: 'Are clear aligners as effective as traditional braces?', a: 'Yes, for most cases. Modern aligner technology, combined with our specialist planning, can treat even complex bite issues with high predictability.' }
    ],
    care: {
      pre: [
        'A high-resolution intraoral 3D scan and a series of digital X-rays (OPG/Lateral Ceph) are taken for precise planning.',
        'We will show you a digital simulation of your expected results and discuss the best appliance for your lifestyle.',
        'Any existing cavities or gum issues must be treated before we begin your orthodontic journey.'
      ],
      post: [
        'Wear your aligners for 20-22 hours a day as instructed to ensure your treatment stays on track.',
        'If you have braces, avoid sticky, crunchy, or very hard foods that could damage the brackets and wires.',
        'Maintain excellent oral hygiene; use specialized orthodontic brushes and flossers to clean around your appliances.',
        'Always wear your retainers as directed after treatment to prevent your teeth from shifting back to their old positions.'
      ]
    },
    cta: 'Aligner & Growth Consultation: +91 84894 88999'
  },
  {
    id: 'prosthodontics',
    name: 'Prosthodontics & Gerodontics',
    image: '/Prosthodontics & Gerodontics.webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>`,
    catchy: 'Swiss-Standard Precision & Compassionate Care for Seniors.',
    desc: 'At DentiQ, we provide world-class Prosthodontic solutions tailored specifically for our senior patients. We are a leading facility in Erode offering BPS (Biofunctional Prosthetic System) dentures—the Swiss standard for fit and comfort. Whether you need a single crown or a full mouth rehabilitation, we use CAD/CAM technology and biocompatible materials to restore your bite and facial support.',
    benefits: [
      { title: 'BPS Swiss-Standard Quality', desc: 'We use the Ivoclar BPS system, which employs high-impact, injection-molded acrylic for a fit that is far superior to traditional dentures.' },
      { title: 'Digital 3D Impressions', desc: 'No more messy "goop." Our intraoral scanners capture every detail of your mouth in seconds, ensuring extreme precision for crowns and bridges.' },
      { title: 'Biocompatible Zirconia', desc: 'We use premium CAD/CAM Zirconia that is metal-free, incredibly strong, and biocompatible—ideal for patients with systemic health concerns.' },
      { title: 'Geriatric Specialists', desc: 'Our team is trained in Gerodontics, understanding the unique impact of medications, dry mouth, and systemic health on elderly dental care.' }
    ],
    services: [
      { name: 'BPS Biofunctional Dentures', detail: 'The gold standard in removable prosthetics, offering unmatched stability, natural aesthetics, and high fracture resistance.' },
      { name: 'Full Mouth Rehabilitation', detail: 'A comprehensive restoration of all teeth to correct severe wear, resolve jaw pain (TMJ), and restore youthful facial proportions.' },
      { name: 'CAD/CAM Zirconia Crowns', detail: 'Computer-milled restorations that provide the perfect blend of lifelike translucency and industrial-grade strength.' },
      { name: 'Precision Attachment Dentures', detail: 'Hybrid solutions that use hidden "locks" or attachments to keep dentures securely in place without visible metal clips.' },
      { name: 'Implant-Supported Overdentures', detail: 'The ultimate senior solution: dentures that "snap" onto implants, eliminating slips and allowing you to eat your favorite foods again.' },
      { name: 'TMJ & Facial Pain Management', detail: 'Specialized therapy for jaw clicking, subluxation, and chronic facial pain caused by an imbalanced bite.' }
    ],
    faqs: [
      { q: 'What makes BPS dentures better than regular ones?', a: 'Regular dentures are made using a simple manual process. BPS dentures use a standardized Swiss protocol and injection-molding technology, resulting in a much more accurate, comfortable, and stable fit.' },
      { q: 'Is Full Mouth Rehabilitation painful for seniors?', a: 'Not at all. We use minimally invasive techniques and specialized anesthesia protocols tailored for older patients to ensure a completely comfortable journey.' },
      { q: 'Can I get new teeth if I have diabetes or bone loss?', a: 'Yes. Our Gerodontic specialists are experts at managing dental care alongside systemic conditions like diabetes and osteoporosis to ensure safe and successful results.' },
      { q: 'How long does it take to get a new set of teeth?', a: 'Thanks to our in-house digital workflow and CAD/CAM technology, we can often complete full reconstructions in significantly fewer visits than traditional clinics.' }
    ],
    care: {
      pre: [
        'A thorough medical history review is performed, including all current medications and systemic health conditions.',
        'Digital 3D scans and high-resolution photography are used to record your natural bite and facial structure.',
        'If extractions are needed, we plan for immediate "transitional" prosthetics so you are never without teeth.'
      ],
      post: [
        'Clean your dentures daily using specialized non-abrasive cleaners; avoid standard toothpaste which can scratch the surface.',
        'If you experience dry mouth (Xerostomia), we will provide specialized moisturizing gels to protect your tissues and improve denture suction.',
        'Attend your scheduled "re-lining" appointments as your jawbone naturally changes over time to ensure a continuously perfect fit.',
        'Caregivers: Please assist with daily hygiene checks and monitor for any signs of mouth sores or changes in eating habits.'
      ]
    },
    cta: 'Restore Your Confidence & Comfort: +91 84894 88999'
  },
  {
    id: 'sports',
    name: 'Sports Dentistry',
    image: '/Sports Dentistry.webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M6.7 6.7l10.6 10.6M6.7 17.3l10.6-10.6"/></svg>`,
    catchy: 'Peak Performance & Elite Protection for Every Athlete.',
    desc: 'At DentiQ, we understand that oral health is a critical component of athletic performance. Our Sports Dentistry department focuses on high-impact injury prevention through custom pressure-laminated mouthguards and expert emergency management of orofacial trauma. We help athletes stay in the game by protecting their smiles and reducing the systemic inflammation that can hinder recovery and endurance.',
    benefits: [
      { title: 'Custom-Fitted Protection', desc: 'Our pressure-laminated guards provide 25% better shock absorption than store-bought "boil-and-bite" options, ensuring maximum safety.' },
      { title: 'Trauma Emergency Care', desc: 'We offer immediate expert care for knocked-out or fractured teeth, using advanced protocols to save your natural smile after on-field injuries.' },
      { title: 'Enhanced Performance', desc: 'Proper bite alignment can improve breathing efficiency and reduce jaw-clenching stress, allowing you to focus entirely on your game.' },
      { title: 'Concussion Mitigation', desc: 'A perfectly fitted mouthguard helps absorb jaw impact forces that can contribute to certain types of concussive injuries.' }
    ],
    services: [
      { name: 'Pressure-Laminated Mouthguards', detail: 'Professional-grade, custom-fabricated guards designed for maximum comfort, speech, and elite-level protection.' },
      { name: 'Emergency Avulsed Tooth Care', detail: 'Immediate surgical replantation and stabilization of teeth knocked out during sports or accidents.' },
      { name: 'Fractured Tooth Restoration', detail: 'Artistic aesthetic repair of chipped or broken teeth using high-strength biomimetic bonding materials.' },
      { name: 'Orofacial Trauma Management', detail: 'Expert treatment for jaw fractures, lip lacerations, and soft tissue injuries sustained during athletic activity.' },
      { name: 'Athlete TMJ & Clenching Therapy', detail: 'Managing stress-induced teeth grinding and jaw pain that can occur during high-intensity training and competition.' },
      { name: 'Enamel Protection Programs', detail: 'Specialized protocols to protect your teeth from the erosive effects of acidic sports drinks and exercise-induced dry mouth.' }
    ],
    faqs: [
      { q: 'Why is a custom mouthguard better than store-bought?', a: 'Store-bought guards are often bulky and loose, which can hinder breathing and speak. Custom-fitted guards stay securely in place and provide significantly higher shock absorption.' },
      { q: 'What should I do if a tooth is knocked out on the field?', a: 'Handle it by the crown (top), not the root. Rinse gently with water, try to put it back in the socket, or keep it in cold milk and see us within 30-60 minutes.' },
      { q: 'Do I need a mouthguard for non-contact sports?', a: 'Yes. Any sport with a risk of falls or collisions (like skating, cycling, or gymnastics) carries a risk of dental trauma. Prevention is always better than repair.' },
      { q: 'Can my dental health affect my athletic performance?', a: 'Absolutely. Chronic gum inflammation or infections can lead to systemic fatigue and slower muscle recovery. A healthy mouth equals a healthier, faster body.' }
    ],
    care: {
      pre: [
        'A digital scan or high-precision impression will be taken of your teeth and jaw to fabricate your custom guard.',
        'Inform your specialist about the specific sport you play so we can tailor the guard’s thickness and material.',
        'Schedule a "Pre-Season" screening to ensure there are no hidden infections or weak teeth that could be compromised during play.'
      ],
      post: [
        'Rinse your mouthguard with cool water and mild soap after every use; never use hot water as it can warp the fit.',
        'Store your guard in its ventilated case to prevent bacteria growth and physical damage.',
        'Bring your mouthguard to every 6-month checkup so we can inspect it for wear and ensure the fit is still perfect.',
        'If you sustain any impact to the face, even without visible damage, visit us immediately to check for internal root fractures.'
      ]
    },
    cta: 'Get Elite Athlete Protection: +91 84894 88999'
  },
  {
    id: 'prosthetics',
    name: 'Maxillofacial Prosthetics',
    image: '/Maxillofacial Prosthetics.webp',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M6.7 6.7l10.6 10.6M6.7 17.3l10.6-10.6"/></svg>`,
    catchy: 'Restoring Function, Aesthetics, and Confidence through Digital Prosthetics.',
    desc: 'At DentiQ, we provide highly specialized care for patients needing replacement of facial or oral structures. Using a combination of 3D digital scanning and medical-grade silicone artistry, we create custom-fit prostheses for the eyes, ears, nose, and jaws, helping our patients regain both their vital functions and their sense of self after trauma or surgery.',
    benefits: [
      { title: 'Digital 3D Scanning', desc: 'We use non-contact optical scanners to create perfect digital models of facial defects, eliminating the need for uncomfortable physical impressions.' },
      { title: 'Lifelike Aesthetic Artistry', desc: 'Our prostheses are hand-tinted to match your exact skin tone, texture, and vascularity, ensuring they blend seamlessly with your face.' },
      { title: 'Implant-Supported Security', desc: 'When possible, we use bone-anchored titanium implants to securely "snap" the prosthesis into place, providing unmatched stability.' },
      { title: 'Functional Restoration', desc: 'Beyond aesthetics, our palatal obturators restore the ability to speak clearly and swallow safely after oral surgery.' }
    ],
    services: [
      { name: 'Ocular & Orbital Prostheses', detail: 'Custom-made artificial eyes and surrounding tissue designed for natural movement and lifelike appearance.' },
      { name: 'Auricular & Nasal Prostheses', detail: 'Precision-crafted ears and noses made from biocompatible silicone, attached via medical adhesives or implants.' },
      { name: 'Palatal Obturators', detail: 'Intraoral devices that close gaps in the palate after cancer surgery, restoring speech and preventing food from entering the nasal cavity.' },
      { name: 'Bone-Anchored Prosthetics', detail: 'Using the same technology as dental implants to provide a permanent, secure attachment point for facial prostheses.' },
      { name: 'Custom Surgical Templates', detail: 'Digital design of surgical guides to help oncology surgeons preserve as much healthy tissue as possible for future prosthetic fitting.' },
      { name: 'Pediatric Prosthetic Care', detail: 'Specialized, gentle care for children born with congenital facial differences, including regular adjustments as they grow.' }
    ],
    faqs: [
      { q: 'How does the prosthesis stay in place?', a: 'Depending on your needs, we use high-grade medical adhesives, specialized spectacle frames, or "snap-on" attachments that connect to small titanium implants in the bone.' },
      { q: 'Is it comfortable to wear all day?', a: 'Yes. Our prostheses are made from lightweight, breathable medical-grade silicone that is designed to be worn comfortably throughout the day and removed at night.' },
      { q: 'How long does a facial prosthesis last?', a: 'With proper daily care, a silicone prosthesis typically lasts 1.5 to 3 years before the color or edges begin to change due to environmental exposure.' },
      { q: 'Will it look real?', a: 'Our goal is "social invisibility." We use advanced color-matching and texture replication so that the prosthesis is not noticeable at a normal conversational distance.' }
    ],
    care: {
      pre: [
        'A multidisciplinary consultation with your surgeon and prosthodontist is ideal before any planned surgery.',
        'Digital scans of your face or teeth may be taken while healthy to provide a blueprint for your future prosthesis.',
        'High-resolution photography is used to record skin tones and anatomical details for perfect replication.'
      ],
      post: [
        'Clean the prosthesis daily using specialized mild soaps to prevent buildup and maintain color.',
        'Gently clean the skin at the attachment site to prevent irritation or infection.',
        'Store your prosthesis in a cool, dry place away from direct sunlight when not in use.',
        'Attend regular 6-month checkups to ensure the prosthesis fits properly as your tissues naturally change over time.'
      ]
    },
    cta: 'Prosthetic Consultation: +91 84894 88999'
  }
];
