window.BENCHMARK_DATA = {
  "lastUpdate": 1702628099840,
  "repoUrl": "https://github.com/open-telemetry/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python SDK Benchmarks - Python 3.11 - SDK": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdb6389a78d7c357565268a68d1705706f453f",
          "message": "Rename benchmarks branch to gh-pages (#3581)\n\nFixes #3580",
          "timestamp": "2023-12-14T20:33:34-06:00",
          "tree_id": "bbcc7db43bfb09d8be31cc43593ce6278e8ea718",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/48fdb6389a78d7c357565268a68d1705706f453f"
        },
        "date": 1702628043216,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 919125.7789501001,
            "unit": "iter/sec",
            "range": "stddev: 8.963932919490788e-8",
            "extra": "mean: 1.0879903740076586 usec\nrounds: 30806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 866171.2563752028,
            "unit": "iter/sec",
            "range": "stddev: 3.360539114209923e-7",
            "extra": "mean: 1.15450610100461 usec\nrounds: 97154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 767111.585345143,
            "unit": "iter/sec",
            "range": "stddev: 2.552029932275722e-7",
            "extra": "mean: 1.3035913146195994 usec\nrounds: 112035"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 678826.2398825133,
            "unit": "iter/sec",
            "range": "stddev: 2.1136217014928756e-7",
            "extra": "mean: 1.473131033021165 usec\nrounds: 78755"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 562677.4826108214,
            "unit": "iter/sec",
            "range": "stddev: 2.518112170502371e-7",
            "extra": "mean: 1.77721702201411 usec\nrounds: 90642"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 919666.2959146053,
            "unit": "iter/sec",
            "range": "stddev: 1.7469742198275074e-7",
            "extra": "mean: 1.0873509276595845 usec\nrounds: 53090"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 870348.3592292825,
            "unit": "iter/sec",
            "range": "stddev: 1.711390158127123e-7",
            "extra": "mean: 1.148965226849543 usec\nrounds: 137466"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 769770.9552563041,
            "unit": "iter/sec",
            "range": "stddev: 2.476861853944945e-7",
            "extra": "mean: 1.299087726253634 usec\nrounds: 134673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 673820.8875513654,
            "unit": "iter/sec",
            "range": "stddev: 3.095565818301746e-7",
            "extra": "mean: 1.4840739111456678 usec\nrounds: 124956"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 561086.0291710411,
            "unit": "iter/sec",
            "range": "stddev: 3.556652894969962e-7",
            "extra": "mean: 1.7822578856176807 usec\nrounds: 84222"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 922689.0368297382,
            "unit": "iter/sec",
            "range": "stddev: 3.541918042448067e-7",
            "extra": "mean: 1.0837887523145326 usec\nrounds: 32110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 879613.799238098,
            "unit": "iter/sec",
            "range": "stddev: 2.743127584021781e-7",
            "extra": "mean: 1.1368625649872455 usec\nrounds: 117272"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 779263.9971320797,
            "unit": "iter/sec",
            "range": "stddev: 2.4385131154992634e-7",
            "extra": "mean: 1.2832621597819143 usec\nrounds: 117645"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684313.1006268384,
            "unit": "iter/sec",
            "range": "stddev: 2.2714819341457625e-7",
            "extra": "mean: 1.4613193859418867 usec\nrounds: 112800"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 559370.3746652022,
            "unit": "iter/sec",
            "range": "stddev: 2.954817015959684e-7",
            "extra": "mean: 1.7877242794606811 usec\nrounds: 115556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 747351.1299360996,
            "unit": "iter/sec",
            "range": "stddev: 1.1132106793108436e-7",
            "extra": "mean: 1.338059126351361 usec\nrounds: 3834"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 745559.9194552418,
            "unit": "iter/sec",
            "range": "stddev: 2.473517316198177e-7",
            "extra": "mean: 1.3412738183815862 usec\nrounds: 198805"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 742225.8500105082,
            "unit": "iter/sec",
            "range": "stddev: 1.9785063942307618e-7",
            "extra": "mean: 1.3472988039770406 usec\nrounds: 159404"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 796165.5373182931,
            "unit": "iter/sec",
            "range": "stddev: 1.0563073921687926e-7",
            "extra": "mean: 1.256020203246021 usec\nrounds: 176487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 794434.4275364181,
            "unit": "iter/sec",
            "range": "stddev: 1.1516120695892894e-7",
            "extra": "mean: 1.2587571300265161 usec\nrounds: 172656"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 737451.5779110143,
            "unit": "iter/sec",
            "range": "stddev: 2.545714008506206e-7",
            "extra": "mean: 1.356021235770773 usec\nrounds: 19623"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 792052.4711555769,
            "unit": "iter/sec",
            "range": "stddev: 1.082930509297308e-7",
            "extra": "mean: 1.2625426173357364 usec\nrounds: 185833"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 746007.1395119943,
            "unit": "iter/sec",
            "range": "stddev: 2.3346138161175505e-7",
            "extra": "mean: 1.3404697449064051 usec\nrounds: 180461"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 748729.2809081713,
            "unit": "iter/sec",
            "range": "stddev: 2.571548644077778e-7",
            "extra": "mean: 1.3355962234935568 usec\nrounds: 190482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 794174.2094031352,
            "unit": "iter/sec",
            "range": "stddev: 1.1371529190980426e-7",
            "extra": "mean: 1.2591695728215022 usec\nrounds: 182145"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 725520.3123605299,
            "unit": "iter/sec",
            "range": "stddev: 1.6657516286637725e-7",
            "extra": "mean: 1.3783211620174103 usec\nrounds: 29187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 770948.2963728677,
            "unit": "iter/sec",
            "range": "stddev: 1.1249219846066901e-7",
            "extra": "mean: 1.297103845620734 usec\nrounds: 173689"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 771659.964464329,
            "unit": "iter/sec",
            "range": "stddev: 1.0792565280216183e-7",
            "extra": "mean: 1.2959075837168514 usec\nrounds: 176516"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 773619.7946507485,
            "unit": "iter/sec",
            "range": "stddev: 1.0863703105812781e-7",
            "extra": "mean: 1.2926246289386263 usec\nrounds: 173942"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 723549.583472139,
            "unit": "iter/sec",
            "range": "stddev: 2.3658190943851145e-7",
            "extra": "mean: 1.3820752894379988 usec\nrounds: 198547"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 720717.3906254729,
            "unit": "iter/sec",
            "range": "stddev: 2.499081775138413e-7",
            "extra": "mean: 1.3875064109833015 usec\nrounds: 29166"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 720605.6629638305,
            "unit": "iter/sec",
            "range": "stddev: 2.2854935390789634e-7",
            "extra": "mean: 1.3877215395269424 usec\nrounds: 198108"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 770908.6440664794,
            "unit": "iter/sec",
            "range": "stddev: 1.1127458966978588e-7",
            "extra": "mean: 1.297170563200696 usec\nrounds: 179586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 776138.9971991688,
            "unit": "iter/sec",
            "range": "stddev: 1.0976382706871773e-7",
            "extra": "mean: 1.2884290102786644 usec\nrounds: 179166"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 726078.7546180703,
            "unit": "iter/sec",
            "range": "stddev: 2.484948283955935e-7",
            "extra": "mean: 1.3772610665712384 usec\nrounds: 194943"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 698478.4011960655,
            "unit": "iter/sec",
            "range": "stddev: 3.018679547085174e-7",
            "extra": "mean: 1.431683496995201 usec\nrounds: 26481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 696636.6460634929,
            "unit": "iter/sec",
            "range": "stddev: 2.3764951840852628e-7",
            "extra": "mean: 1.4354685554524476 usec\nrounds: 191160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 689228.0590736185,
            "unit": "iter/sec",
            "range": "stddev: 2.185035319096884e-7",
            "extra": "mean: 1.4508985622902317 usec\nrounds: 199952"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 682303.9362160373,
            "unit": "iter/sec",
            "range": "stddev: 2.5268452712937975e-7",
            "extra": "mean: 1.4656224988908328 usec\nrounds: 193433"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 681694.5013493592,
            "unit": "iter/sec",
            "range": "stddev: 2.4945746354848175e-7",
            "extra": "mean: 1.4669327653671562 usec\nrounds: 169414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 66727.45592804764,
            "unit": "iter/sec",
            "range": "stddev: 0.000007420231283133922",
            "extra": "mean: 14.986334876580672 usec\nrounds: 33"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 59365.31338844127,
            "unit": "iter/sec",
            "range": "stddev: 9.421017812330877e-7",
            "extra": "mean: 16.84485338191957 usec\nrounds: 23564"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdb6389a78d7c357565268a68d1705706f453f",
          "message": "Rename benchmarks branch to gh-pages (#3581)\n\nFixes #3580",
          "timestamp": "2023-12-14T20:33:34-06:00",
          "tree_id": "bbcc7db43bfb09d8be31cc43593ce6278e8ea718",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/48fdb6389a78d7c357565268a68d1705706f453f"
        },
        "date": 1702628099034,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 914534.7312585397,
            "unit": "iter/sec",
            "range": "stddev: 1.1270452849354733e-7",
            "extra": "mean: 1.0934521848326602 usec\nrounds: 32586"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 864052.3903774832,
            "unit": "iter/sec",
            "range": "stddev: 8.546812213871608e-8",
            "extra": "mean: 1.1573372299370928 usec\nrounds: 90819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 761308.7564849785,
            "unit": "iter/sec",
            "range": "stddev: 1.3596579167115952e-7",
            "extra": "mean: 1.3135275162433142 usec\nrounds: 126012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 674780.8249785887,
            "unit": "iter/sec",
            "range": "stddev: 1.1661564999311933e-7",
            "extra": "mean: 1.4819626802995338 usec\nrounds: 115494"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 557321.5960060655,
            "unit": "iter/sec",
            "range": "stddev: 1.4991253600321297e-7",
            "extra": "mean: 1.7942961607199532 usec\nrounds: 111628"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 910859.0629007356,
            "unit": "iter/sec",
            "range": "stddev: 7.865002129585527e-8",
            "extra": "mean: 1.097864687008092 usec\nrounds: 51146"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 858930.9927815739,
            "unit": "iter/sec",
            "range": "stddev: 1.4259343754750532e-7",
            "extra": "mean: 1.1642378822093569 usec\nrounds: 145258"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 779896.0115615657,
            "unit": "iter/sec",
            "range": "stddev: 1.6928876395082407e-7",
            "extra": "mean: 1.282222226008985 usec\nrounds: 124104"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 672149.6392529444,
            "unit": "iter/sec",
            "range": "stddev: 1.0159950706515345e-7",
            "extra": "mean: 1.4877639465989188 usec\nrounds: 49617"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 564166.4704047614,
            "unit": "iter/sec",
            "range": "stddev: 1.6222781776513107e-7",
            "extra": "mean: 1.7725264659605697 usec\nrounds: 118685"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 926062.2100203916,
            "unit": "iter/sec",
            "range": "stddev: 7.712626534427721e-8",
            "extra": "mean: 1.0798410616258494 usec\nrounds: 25179"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 880042.8530710989,
            "unit": "iter/sec",
            "range": "stddev: 1.7188413823432172e-7",
            "extra": "mean: 1.1363083019313036 usec\nrounds: 48492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 774632.1206254049,
            "unit": "iter/sec",
            "range": "stddev: 3.476839558201053e-7",
            "extra": "mean: 1.290935365800017 usec\nrounds: 126860"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 679741.4626742263,
            "unit": "iter/sec",
            "range": "stddev: 1.3977711367002874e-7",
            "extra": "mean: 1.4711475684678974 usec\nrounds: 112611"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 560431.0746659256,
            "unit": "iter/sec",
            "range": "stddev: 1.864216601025188e-7",
            "extra": "mean: 1.784340742697222 usec\nrounds: 122770"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 752937.0015770134,
            "unit": "iter/sec",
            "range": "stddev: 1.5148459533567995e-7",
            "extra": "mean: 1.328132364202473 usec\nrounds: 3985"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 748368.5073086824,
            "unit": "iter/sec",
            "range": "stddev: 1.78901080051197e-7",
            "extra": "mean: 1.3362400879163747 usec\nrounds: 180522"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 741997.8063398638,
            "unit": "iter/sec",
            "range": "stddev: 2.7695012813972453e-7",
            "extra": "mean: 1.3477128792776527 usec\nrounds: 156022"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 805447.9002434706,
            "unit": "iter/sec",
            "range": "stddev: 7.40235212877754e-8",
            "extra": "mean: 1.241545231786836 usec\nrounds: 182052"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 803271.7818976644,
            "unit": "iter/sec",
            "range": "stddev: 8.62684285899718e-8",
            "extra": "mean: 1.2449086629653305 usec\nrounds: 187227"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 734621.2431827871,
            "unit": "iter/sec",
            "range": "stddev: 7.63558221705793e-7",
            "extra": "mean: 1.3612456885502586 usec\nrounds: 20213"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 797356.9606610265,
            "unit": "iter/sec",
            "range": "stddev: 1.0116884351975274e-7",
            "extra": "mean: 1.2541434380543663 usec\nrounds: 187292"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 796386.5407922904,
            "unit": "iter/sec",
            "range": "stddev: 9.123947390869153e-8",
            "extra": "mean: 1.2556716478472167 usec\nrounds: 189741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 793398.1494794333,
            "unit": "iter/sec",
            "range": "stddev: 9.801316521611751e-8",
            "extra": "mean: 1.2604012256092643 usec\nrounds: 182021"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 801066.9017777751,
            "unit": "iter/sec",
            "range": "stddev: 1.0337396732053723e-7",
            "extra": "mean: 1.2483351862132124 usec\nrounds: 186414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 732744.2461842541,
            "unit": "iter/sec",
            "range": "stddev: 1.415993881433974e-7",
            "extra": "mean: 1.3647326542753124 usec\nrounds: 29331"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 731715.1335620825,
            "unit": "iter/sec",
            "range": "stddev: 1.5709926475976624e-7",
            "extra": "mean: 1.3666520673583347 usec\nrounds: 196909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 787579.0228127004,
            "unit": "iter/sec",
            "range": "stddev: 9.717123658903031e-8",
            "extra": "mean: 1.2697138585899297 usec\nrounds: 182362"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 788881.0130716665,
            "unit": "iter/sec",
            "range": "stddev: 9.360788151980771e-8",
            "extra": "mean: 1.267618288981629 usec\nrounds: 185898"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 785532.557949987,
            "unit": "iter/sec",
            "range": "stddev: 9.39930708399454e-8",
            "extra": "mean: 1.273021709768098 usec\nrounds: 186998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 733727.0911390329,
            "unit": "iter/sec",
            "range": "stddev: 1.1502981571529203e-7",
            "extra": "mean: 1.362904562304776 usec\nrounds: 27704"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 788707.8045534155,
            "unit": "iter/sec",
            "range": "stddev: 1.0113338676892568e-7",
            "extra": "mean: 1.2678966712726052 usec\nrounds: 186706"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 786170.3684120289,
            "unit": "iter/sec",
            "range": "stddev: 9.633345785417816e-8",
            "extra": "mean: 1.2719889227316996 usec\nrounds: 183797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 787354.8352420579,
            "unit": "iter/sec",
            "range": "stddev: 1.038557743004313e-7",
            "extra": "mean: 1.2700753907132203 usec\nrounds: 183233"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 785749.3036353132,
            "unit": "iter/sec",
            "range": "stddev: 9.951380770357785e-8",
            "extra": "mean: 1.272670552011238 usec\nrounds: 181315"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 702034.7010578095,
            "unit": "iter/sec",
            "range": "stddev: 1.5831219165612887e-7",
            "extra": "mean: 1.4244310124459991 usec\nrounds: 25289"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 702972.9199753063,
            "unit": "iter/sec",
            "range": "stddev: 1.656699058252965e-7",
            "extra": "mean: 1.4225299034778291 usec\nrounds: 188013"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 730412.8132781805,
            "unit": "iter/sec",
            "range": "stddev: 1.104800999248017e-7",
            "extra": "mean: 1.3690887972130168 usec\nrounds: 113841"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 695306.13278008,
            "unit": "iter/sec",
            "range": "stddev: 1.7800481340548361e-7",
            "extra": "mean: 1.4382154174329604 usec\nrounds: 199915"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 735978.4984264297,
            "unit": "iter/sec",
            "range": "stddev: 9.046722847968993e-8",
            "extra": "mean: 1.3587353463967569 usec\nrounds: 166317"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72891.64451978673,
            "unit": "iter/sec",
            "range": "stddev: 0.000004170946460692756",
            "extra": "mean: 13.718993536063602 usec\nrounds: 35"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 58711.63452041671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011305844337584604",
            "extra": "mean: 17.032399253886457 usec\nrounds: 17920"
          }
        ]
      }
    ]
  }
}