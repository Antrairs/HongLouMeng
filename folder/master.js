


const para = document.querySelectorAll('#paragraph > p')

for (let d of data) {
    try {
        if (!(d.content && (d.explain || d.pinyin || d.common)))
            throw d;

    } catch (err) {
        console.warn(err);
        continue;
    }
    for (let p of para) {
        let text = p.innerHTML
        let pos = text.search(d.content)
        if (pos !== -1) {
            let span = document.createElement('span');
            if (d.explain) {
                span.className += 'key-word'
                span.setAttribute('data', d.explain)
            }
            if (d.pinyin) {
                let ruby = document.createElement('ruby');
                let rb = document.createElement('rb')
                rb.textContent = d.content
                ruby.appendChild(rb)
                let rt = document.createElement('rt')
                rt.textContent = d.pinyin
                rt.className += 'pin-yin'
                ruby.appendChild(rt)
                let rp = document.createElement('rp')
                rp.textContent = d.pinyin
                rp.className += 'pin-yin'
                ruby.appendChild(rp)
                span.appendChild(ruby)
            } else {
                span.textContent = d.content;
            }
            let textSpan;
            if (d.common) {
                span.style.borderBottom = '1px dotted black'
                let heiMu = document.createElement('span');
                heiMu.textContent = d.common;
                heiMu.className += 'hei-mu';

                let st = span.outerHTML
                st += heiMu.outerHTML
                textSpan = st;

            } else {
                textSpan = span.outerHTML;
            }
            p.innerHTML = text.replace(d.content, textSpan)
            break
        }
    }
}