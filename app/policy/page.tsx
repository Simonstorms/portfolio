"use client";
import Footer from "@/components/footer";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-6xl mt-20 mx-auto p-10 ">
      <div className="px-8  ">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link className="flex items-center py-10 justify-center" href="/">
            <div className="border  p-3 dark:border-white border-black rounded-full ">
              <IoCloseOutline size={20} />
            </div>
          </Link>
        </motion.div>
        <h1 className="py-3 text-5xl font-extrabold ">Datenschutzerklärung</h1>
        <h2 className="py-3 text-4xl font-bold ">
          1. Datenschutz auf einen Blick
        </h2>
        <h3 className="py-3 text-3xl">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>
        <h3 className="py-3 text-3xl font-bold ">
          Datenerfassung auf dieser Website
        </h3>
        <h4 className="py-3 text-2xl  ">
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.
        </p>
        <h4 className="py-3 text-2xl ">Wie erfassen wir Ihre Daten?</h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT- Systeme erfasst. Das sind vor
          allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>
        <h4>Wofür nutzen wir Ihre Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>
        <h4 className="py-3 text-2xl  ">
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit an uns wenden.
        </p>
        <h3 className="py-3 text-3xl  ">
          Analyse-Tools und Tools von Drittanbietern
        </h3>
        <p>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit sogenannten
          Analyseprogrammen.
        </p>
        <p>
          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
          der folgenden Datenschutzerklärung.
        </p>
        <h2 className="py-3 text-4xl font-bold ">2. Hosting</h2>
        <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
        <h3 className="py-3 text-3xl font-bold ">Externes Hosting</h3>
        <p>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die
          auf dieser Website erfasst werden, werden auf den Servern des Hosters
          / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
          Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
          Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
          Website generiert werden, handeln.
        </p>
        <p>
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber
          unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b
          DSGVO) und im Interesse einer sicheren, schnellen und effizienten
          Bereitstellung unseres Online-Angebots durch einen professionellen
          Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende
          Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
          auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
          soweit die Einwilligung die Speicherung von Cookies oder den Zugriff
          auf Informationen im Endgerät des Nutzers (z. B.
          Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
        </p>
        <p>
          Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten,
          wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und
          unsere Weisungen in Bezug auf diese Daten befolgen.
        </p>
        <p>Wir setzen folgende(n) Hoster ein:</p>
        <p>
          Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel ist
          eine Cloud Plattform, über die wir unsere Website bereitstellen.
        </p>
        <h2 className="py-3 text-4xl font-bold ">
          3. Allgemeine Hinweise und Pflichtinformationen
        </h2>
        <h3 className="py-3 text-3xl font-bold ">Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
          bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
          Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht möglich.
        </p>
        <h3 className="py-3 text-3xl font-bold ">
          Hinweis zur verantwortlichen Stelle
        </h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist: Simon Gneuß
        </p>
        <p>E-Mail: info@simongneuss.com</p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </p>
        <h3 className="py-3 text-3xl font-bold ">Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
          erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>
        <h3 className=" text-3xl font-bold py-7">
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
          dieser Website
        </h3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdrücklichen Einwilligung in die Übertragung personenbezogener
          Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
          Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
          Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr
          Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt
          die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG.
          Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs.
          1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
          zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf
          Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann
          ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs.
          1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen
          Rechtsgrundlagen wird in den folgenden Absätzen dieser
          Datenschutzerklärung informiert.
        </p>
        <h3 className="py-3 text-3xl font-bold ">
          Empfänger von personenbezogenen Daten
        </h3>
        <p>
          Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen
          externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung
          von personenbezogenen Daten an diese externen Stellen erforderlich.
          Wir geben personenbezogene Daten nur dann an externe Stellen weiter,
          wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir
          gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an
          Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs.
          1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
          Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
          Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden
          nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung
          weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
          gemeinsame Verarbeitung geschlossen.
        </p>
        <h3 className="py-3 text-3xl font-bold ">
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <h3 className=" text-3xl font-bold py-7">
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
          gegen Direktwerbung (Art. 21 DSGVO)
        </h3>
        <p>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER
          F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH
          AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
          PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
          AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
          RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
          DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
          IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
          SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
          VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
          ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG
          ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS.
          1 DSGVO).
        </p>
        <p>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
          BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
          DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING,
          SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
          WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
          MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
          ABS. 2 DSGVO).
        </p>
        <h3 className="py-3 text-3xl font-bold ">
          Beschwerderecht bei der zuständigen Aufsichtsbehörde
        </h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>
        <h3 className="py-3 text-3xl font-bold ">
          Recht auf Datenübertragbarkeit
        </h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>
        <h3 className="py-3 text-3xl font-bold ">
          Auskunft, Berichtigung und Löschung
        </h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>
        <h3 className="py-3 text-3xl font-bold ">
          Recht auf Einschränkung der Verarbeitung
        </h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:
        </p>
        <p>
          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
          Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
          überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </p>
        <p>
          Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
          geschah/geschieht, können Sie statt der Löschung die Einschränkung der
          Datenverarbeitung verlangen.
          <br />
          Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
          jedoch zur Ausübung, Verteidigung oder Geltendmachung von
          Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
          <br />
          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
          muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen
          werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
          haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen.
        </p>

        <p>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
          haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
          Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
          von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
          natürlichen oder juristischen Person oder aus Gründen eines wichtigen
          öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </p>
        <h4 className="py-3 text-2xl  ">SSL- bzw. TLS-Verschlüsselung</h4>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLS- Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
          werden.
        </p>
        <h2 className="py-3 text-4xl font-bold ">
          4. Datenerfassung auf dieser Website{" "}
        </h2>
        <h3 className="py-3 text-3xl font-bold ">Cookies</h3>
        <p>
          Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
          kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
          Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
          Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
          automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese selbst löschen oder eine automatische
          Löschung durch Ihren Webbrowser erfolgt.
        </p>
        <p>
          Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen
          stammen (sog. Third-Party- Cookies). Third-Party-Cookies ermöglichen
          die Einbindung bestimmter Dienstleistungen von Drittunternehmen
          innerhalb von Webseiten (z. B. Cookies zur Abwicklung von
          Zahlungsdienstleistungen).
        </p>
        <p>
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
          technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht
          funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von
          Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens
          oder zu Werbezwecken verwendet werden.
        </p>
        <p>
          Cookies, die zur Durchführung des elektronischen
          Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
          erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
          Optimierung der Website (z. B. Cookies zur Messung des Webpublikums)
          erforderlich sind (notwendige Cookies), werden auf Grundlage von Art.
          6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
          angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an
          der Speicherung von notwendigen Cookies zur technisch fehlerfreien und
          optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung
          zur Speicherung von Cookies und vergleichbaren
          Wiedererkennungstechnologien abgefragt wurde, erfolgt die
        </p>
        <p>
          Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6
          Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist
          jederzeit widerrufbar.
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browsers
          aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
          dieser Website eingeschränkt sein.
        </p>
        <p>
          Welche Cookies und Dienste auf dieser Website eingesetzt werden,
          können Sie dieser Datenschutzerklärung entnehmen.
        </p>
        <h2 className="py-3 text-4xl font-bold ">5. Newsletter </h2>
        <h3 className="py-3 text-3xl font-bold ">Newsletterdaten</h3>
        <p>
          Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten,
          benötigen wir von Ihnen eine E- Mail-Adresse sowie Informationen,
          welche uns die Überprüfung gestatten, dass Sie der Inhaber der
          angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters
          einverstanden sind. Weitere Daten werden nicht bzw. nur auf
          freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich
          für den Versand der angeforderten Informationen und geben diese nicht
          an Dritte weiter.
        </p>
        <p>
          Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen
          Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6
          Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der
          Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des
          Newsletters können Sie jederzeit widerrufen, etwa über den
          „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits
          erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
        </p>
        <p>
          Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten
          Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter bei
          uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der
          Abbestellung des Newsletters oder nach Zweckfortfall aus der
          Newsletterverteilerliste gelöscht. Wir behalten uns vor,
          E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen
          im Rahmen unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
          DSGVO zu löschen oder zu sperren.
        </p>
        <p>
          Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben
          hiervon unberührt.
        </p>
        <p>
          Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre
          E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in
          einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger
          Mailings erforderlich ist. Die Daten aus der Blacklist werden nur für
          diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt.
          Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der
          Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern
          (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die
          Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können
          der Speicherung widersprechen, sofern Ihre Interessen unser
          berechtigtes Interesse überwiegen.
        </p>
        <h2 className="py-3 text-4xl font-bold ">6. Plugins und Tools</h2>
        <h3 className="py-3 text-3xl font-bold ">OpenStreetMap</h3>
        <p>Wir nutzen den Kartendienst von OpenStreetMap (OSM).</p>
        <p>
          Wir binden das Kartenmaterial von OpenStreetMap auf dem Server der
          OpenStreetMap Foundation, St John’s Innovation Centre, Cowley Road,
          Cambridge, CB4 0WS, Großbritannien, ein. Großbritannien gilt als
          datenschutzrechtlich sicherer Drittstaat. Das bedeutet, dass
          Großbritannien ein Datenschutzniveau aufweist, das dem
          Datenschutzniveau in der Europäischen Union entspricht. Bei der
          Nutzung der OpenStreetMap-Karten wird eine Verbindung zu den Servern
          der OpenStreetMap-Foundation hergestellt.
        </p>
        <p>
          Dabei können u. a. Ihre IP-Adresse und weitere Informationen über Ihr
          Verhalten auf dieser Website an die OSMF weitergeleitet werden.
          OpenStreetMap speichert hierzu unter Umständen Cookies in Ihrem
          Browser oder setzt vergleichbare Wiedererkennungstechnologien ein.
        </p>
        <p>
          Die Nutzung von OpenStreetMap erfolgt im Interesse einer ansprechenden
          Darstellung unserer Online- Angebote und einer leichten Auffindbarkeit
          der von uns auf der Website angegebenen Orte. Dies stellt ein
          berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
          Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
          DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung
          von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
          (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
          Einwilligung ist jederzeit widerrufbar.
        </p>
        <h3 className="py-3 text-3xl font-bold ">Spotify</h3>
        <p>
          Auf dieser Website sind Funktionen des Musik-Dienstes Spotify
          eingebunden. Anbieter ist die Spotify AB, Birger Jarlsgatan 61, 113 56
          Stockholm in Schweden. Die Spotify Plugins erkennen Sie an dem grünen
          Logo auf dieser Website. Eine Übersicht über die Spotify-Plugins
          finden Sie unter: https://developer.spotify.com.
        </p>
        <p>
          Dadurch kann beim Besuch dieser Website über das Plugin eine direkte
          Verbindung zwischen Ihrem Browser und dem Spotify-Server hergestellt
          werden. Spotify erhält dadurch die Information, dass Sie mit Ihrer
          IP-Adresse diese Website besucht haben. Wenn Sie den Spotify Button
          anklicken, während Sie in Ihrem Spotify-Account eingeloggt sind,
          können Sie die Inhalte dieser Website auf Ihrem Spotify Profil
          verlinken. Dadurch kann Spotify den Besuch dieser Website Ihrem
          Benutzerkonto zuordnen.
        </p>
        <p>
          Wir weisen darauf hin, dass bei der Nutzung von Spotify Cookies von
          Google Analytics eingesetzt werden, sodass Ihre Nutzungsdaten bei der
          Nutzung von Spotify auch an Google weitergegeben werden können. Google
          Analytics ist ein Tool des Google-Konzerns zur Analyse des
          Nutzerverhaltens mit Sitz in den USA. Für diese Einbindung ist allein
          Spotify verantwortlich. Wir als Websitebetreiber haben auf diese
          Verarbeitung keinen Einfluss.
        </p>
        <p>
          Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
          Interesse an der ansprechenden akustischen Ausgestaltung seiner
          Website. Sofern eine entsprechende Einwilligung abgefragt wurde,
          erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs.
          1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
          Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
          des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
          Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
          von Spotify: https://www.spotify.com/de/legal/privacy-policy/.
        </p>
        <p>
          Wenn Sie nicht wünschen, dass Spotify den Besuch dieser Website Ihrem
          Spotify-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem
          Spotify-Benutzerkonto aus.
        </p>
        <Footer />
      </div>
    </main>
  );
}
