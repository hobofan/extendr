(function() {var implementors = {};
implementors["extendr_api"] = [{"text":"impl From&lt;*mut SEXPREC&gt; for Robj","synthetic":false,"types":[]},{"text":"impl From&lt;()&gt; for Robj","synthetic":false,"types":[]},{"text":"impl From&lt;usize&gt; for Robj","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Character&lt;'a&gt;&gt; for Robj","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Lang&lt;'a&gt;&gt; for Robj","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;T&gt; for Robj <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ToVectorValue,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, '_&gt; From&lt;&amp;'_ [T]&gt; for Robj <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ToVectorValue + Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;Vec&lt;T&gt;&gt; for Robj <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ToVectorValue + Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;List&lt;'a&gt;&gt; for Robj","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a [Bool]&gt; for Robj","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Symbol&lt;'a&gt;&gt; for Robj","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()