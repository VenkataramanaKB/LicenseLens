function AboutPage() {
  return (
      <div className="max-w-3xl mx-auto p-6 text-gray-800">
          <h1 className="text-3xl font-bold text-center mb-4 text-green-600">About LicenseLens</h1>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
              LicenseLens is an open-source tool built for the FOSS community, helping developers, 
              legal professionals, and open-source enthusiasts quickly find software licenses and 
              understand their terms, permissions, and restrictions. Whether you're choosing a 
              license for your project or checking compliance, LicenseLens makes it easy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Why LicenseLens?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Find the Right License:</strong> Get recommendations on the best open-source license for your project.</li>
              <li><strong>Fast License Lookup:</strong> Instantly search for software licenses.</li>
              <li><strong>Clear Explanations:</strong> Easily understand permissions and restrictions.</li>
              <li><strong>Multiple Access Methods:</strong> Use the web interface or API via cURL.</li>
              <li><strong>User-Friendly Interface:</strong> Built with React for a smooth experience.</li>
              <li><strong>Powerful Backend:</strong> Flask-based API for efficient data retrieval.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">FOSS United Initiative</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
              LicenseLens is an initiative under <strong>FOSS United</strong> to promote open-source 
              software adoption and understanding. We welcome contributions! Feel free to 
              <a href="https://github.com/your-repo" className="text-green-500 hover:underline"> fork the repository</a>, 
              submit issues, and make pull requests.
          </p>
      </div>
  );
}

export default AboutPage;
